from typing import List
from models.GraphPoint import GraphPoint
from datetime import datetime, date
from services.repository import getFolders
from pandas.core.frame import DataFrame
import pandas as pd


def get_alert_vs_closed_graph(requestDate: str, plant: str) -> List[GraphPoint]:
    dateObject = datetime.strptime(requestDate, "%Y/%m/%d")
    dateRef = date(dateObject.year, dateObject.month, dateObject.day)
    return [
        GraphPoint(
            "bar",
            "red",
            list(map(monthInLetters, calculate(dateRef))),
            getDataList(plant, dateRef)
        )
    ]

# Function that converts YYMM to letters Mmm and places the 'YY if it is January ("Jan").
def monthInLetters(xmes):
    Mmm = date(int("20"+xmes[:2]), int(xmes[2:4]), 1).strftime("%b")
    if Mmm == "Jan":
        Mmm = Mmm+"'"+xmes[:2]
    return Mmm

# Create x-axis with the last 12 months.
def calculate (dateNew):
    monthIni = str(dateNew.year)[2:] + str(dateNew.month)
    month  = int(monthIni[2:4])
    year = int(monthIni[0:2])
    cmonth = str(month)
    AAMM = ""
    for i in range(1, 13):
        if month < 10:
            cmonth = "0" + str(month)
        else:
            cmonth = str(month)
        cyear = str(year)
        AAMM = AAMM + cyear + cmonth + ","
        month = month - 1
        if month == 0:
            month = 12
            year = year - 1
    AAMM = AAMM[:-1]
    AAMM = AAMM.rstrip().split(",")
    return AAMM

# FI column. Indicates if the warning is a fault.
# Calculate the values ​​for start month, period and plant.
def calculateTheValuesForStartMonth (iw69Read, monthIni):
    df69 = DataFrame(iw69Read, columns = [
        "Aviso",
        "Clase de aviso",
        "Ubicac.técnica",
        "Falla de Equipo",
        "Inicio avería",
        "MesInic",
        "Repercusión",
        "Orden", "Status sistema"
    ])
    df69["FI"] = df69.apply(lambda x: xfi(x["Falla de Equipo"], x["Repercusión"]), axis = 1)
    df69["MesInic"]   = df69["Inicio avería"].apply(lambda x: x[8:] + x[3:5])
    df69["PER1"]      = df69["MesInic"].apply(lambda date: xper1(date, monthIni))
    df69["Planta"]    = df69["Ubicac.técnica"].apply(lambda x: x[:3])
    return df69

# Eliminate duplicate notices in iw39.
def clearData (iw39Read, plant):
    iw39Read = iw39Read[(iw39Read["Planta"] == plant) & (iw39Read["PER1"] == "X")]
    iw39Read = iw39Read.drop_duplicates(subset = "Aviso")
    return iw39Read

# Create a new df (df1) by joining df_Emit and df_Conc.
def mergeFile (iw69Read: str, iw39Read: str, monthIni: str, plant: str):
    df69 = calculateTheValuesForStartMonth(iw69Read, monthIni)
    df69 = clearData(df69, plant)
    df39 = DataFrame(iw39Read, columns = [
        "Orden",
        "Clase de orden",
        "Status sistema",
        "Status usuario"
    ])
    return pd.merge(df69, df39, on = "Orden", how = "outer")

# Función que para revisar si el aviso está concluido.
def yconcl(sist_o, usua, clase, sist_a):
    xconcl = ""
    xsist_o = str(sist_o)[0]
    xsist_a = str(sist_a)[0:4]
    xusua = str(usua)[0:4]
    if xsist_o == "C" or xusua == "EJEC" or clase == "M3" or xsist_a == "MECE": 
        xconcl = "X"
    return xconcl

def setStatus (fileIw69: str, fileIw39: str, date: str, plant: str):
    iw69Read = getFolders(fileIw69)
    iw39Read = getFolders(fileIw39)
    monthIni = str(date.year)[2:] + str(date.month)
    dataMerged = mergeFile(iw69Read, iw39Read, monthIni, plant)
    dataMerged["Concl"] = dataMerged.apply(lambda x: yconcl(x["Status sistema_y"],
               x["Status usuario"], x["Clase de aviso"], x["Status sistema_x"]), axis = 1)
    dataMerged = dataMerged[dataMerged["PER1"] == "X"]
    return dataMerged

# Function to determine the failure indicator (FI).
# FI is "X" if the warning has Failure Indicator = "X" or Hit = 3.
def xfi(ifailure, reperc):
    yfailure = ""
    if reperc == 3 or ifailure == "X":
        yfailure = "X"
    return yfailure

# Function to determine if the notice is in the 1-year period.
def xper1(date, monthIni):
    xper = ""
    if date <= calculatePer(monthIni)[2] and date >= calculatePer(monthIni)[0]:
        xper = "X"
    return xper

# Calculate PER1 and PER2 (Periods of 1 and 2 years, YYMM, from the reference date.)
def calculatePer(monthIni):
    month  = int(monthIni[2:4])
    year = int(monthIni[0:2])
    for x in range(0, 2):
        for i in range(1, 12):
            month = month - 1
            if month == 0:
                month = 12
                year = year - 1
        if month < 10:
            month = "0" + str(month)
        else:
            month = str(month)
        if x == 0:
            PER1 = str(year) + month
        else:
            PER2 = str(year) + month 
        month = int(month) - 1
    return [PER1, PER2, monthIni]

# Create a "No concluidos" column from the "Concluidos" column.
# Create a column for Emit.
# Create a df for avisos emitidos only.
# Create a df only for avisos concluidos
# Create a new df (df1) by joining df_Emit and df_Conc.
# Convert Nan values ​​(if any) to 0.
def createdNewFields(data):
    data["NotConcl"] = data["Concl"].apply(lambda x: "" if (x == "X") else "X")
    data["Emit"] = data.apply(lambda x: x["Concl"] + x["NotConcl"], axis = 1)
    df_Emit = data[data["Emit"] == "X"]
    df_Emit = df_Emit.drop(["Concl","NotConcl"], axis = 1)
    df_Conc = data[data["Concl"] == "X"]
    df_Conc = df_Conc.drop(["Emit","NotConcl"], axis = 1)
    df_Emit = df_Emit.groupby("MesInic").size().reset_index(name='Emitidos')
    df_Conc = df_Conc.groupby("MesInic").size().reset_index(name='Conclx')
    df1 = pd.merge(df_Emit, df_Conc, on = "MesInic", how = "outer" )
    return df1.fillna(0)

# Returns the y-axis data
def getDataList(plant: str, date: str) -> List:
    try:
        data = setStatus('.csv/MED_IW69.csv', '.csv/MED_IW39.csv', date, plant)
        data = createdNewFields(data)
        mothC = []
        conc = []
        emit = []
        for i in range(len(data)):
            mothC = mothC + [data["MesInic"][i]]
            emit = emit + [data["Emitidos"][i]]
            conc = conc + [int(data["Conclx"][i])]

        return month_filling(mothC, emit, date)
    except:
        print("An exception occurred")
        return []

# This converts the content of dataframe into lists (to be able to graph)
def month_filling(mesx, valorx, date) -> List[int]:
    K_list = "".join(mesx)
    N = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    AAMM = list(reversed(calculate(date)))
    for i in range(12-len(valorx)):
        valorx.append(0)
    j = 0
    for i in range(12):
        if K_list.find(AAMM[i]) != -1:
            N[i] = int(valorx[j])
            j = j + 1
    return N