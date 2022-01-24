# MED_01_001.py.
# Gráfica #1. Avisos emitidos vs avisos concluidos últimos 12 meses.
# Fecha finalización: 28.12.2021.

# IMPORTANTE:
# Los campos de fecha deben tener el formato DD/MM/AAAA, 21/9/2021 debe ser 21/09/2021.

from pathlib import Path
from pandas.core.frame import DataFrame

CURRENT_PATH = Path(__file__)

# Se requieren 2 tablas, IW69: Datos de los eventos/solicitudes de mantenimiento.
#                              En SAP cada registro se llama "posición de aviso".
#                        IW39: Datos de las órdenes de mantenimiento.

WORKING_FILE_01 = CURRENT_PATH.parent.joinpath("MED_IW69.csv")
WORKING_FILE_02 = CURRENT_PATH.parent.joinpath("MED_IW39.csv")

import pandas as pd
import matplotlib as mpl
import matplotlib.pyplot as plt
import numpy as np
import datetime
from datetime import timedelta

# Carga el archivo CSV contentivo de los datos de posiciones de aviso.
Posic_avisos = pd.read_csv(WORKING_FILE_01, sep=";")
Ordenes = pd.read_csv(WORKING_FILE_02, sep=";")

# Fecha de referencia, viene del usuario. Fecha de toma de los datos.
#    Se usa 27 de octubre 2021, ya que es el set de datos disponible para pruebas.
FechaRef = datetime.date(2021, 10, 27)
MesInic = str(FechaRef.year)[2:] + str(FechaRef.month)

# La planta viene del input del usuario.
#    Las plantas son DAL, COL y PAR.
Planta = "DAL"

# Calcular PER1 y PER2 (Períodos de 1 y 2 años, AAMM, desde la fecha de referencia.)
mes  = int(MesInic[2:4])
anno = int(MesInic[0:2])
for x in range(0, 2):
    for i in range(1, 12):
        mes = mes - 1
        if mes == 0:
            mes = 12
            anno = anno - 1
    if mes < 10:
        mes = "0" + str(mes)
    else:
        mes = str(mes)
    if x == 0:
        PER1 = str(anno) + mes
    else:
        PER2 = str(anno) + mes 
    mes = int(mes) - 1

# Crear valor para eje de las x (meses) en gráficas de 12 meses.
#   Salida: Una serie AAMM (AA: dos últimos dígitos del año, MM: mes numérico).

# Crear eje x con los últimos 12 meses.
mes  = int(MesInic[2:4])
anno = int(MesInic[0:2])
AAMM = ""
cmes = str(mes)

for i in range(1, 13):
    if mes < 10:
       cmes = "0" + str(mes)
    else:
        cmes = str(mes)
    canno = str(anno)
    AAMM = AAMM + canno + cmes + ","
    mes = mes - 1
    if mes == 0:
        mes = 12
        anno = anno - 1
AAMM = AAMM[:-1]
AAMM = AAMM.rstrip().split(",")

# Función para determinar el indicador de falla (FI).
#   FI es "X" si el aviso tiene indicador de falla = "X" o Repercusión = 3.
def xfi(ifalla, reperc):
    yfalla = ""
    if reperc == 3 or ifalla == "X":
        yfalla = "X"
    return yfalla

# Función para determinar si el aviso está en el período de 1 año.
def xper1(fecha):
    xper = ""
    if fecha <= MesInic and fecha >= PER1:
        xper = "X"
    return xper

# Función que convierte AAMM en letras Mmm y coloca el 'AA si es enero ("Jan").
def mesletras(xmes):
    Mmm = datetime.date(int("20"+xmes[:2]), int(xmes[2:4]), 1).strftime("%b")
    if Mmm == "Jan":
        Mmm = Mmm+"'"+xmes[:2]
    return Mmm

# Función que para revisar si el aviso está concluido.
def yconcl(sist_o, usua, clase, sist_a):
    xconcl = ""
    xsist_o = str(sist_o)[0]
    xsist_a = str(sist_a)[0:4]
    xusua = str(usua)[0:4]
    if xsist_o == "C" or xusua == "EJEC" or clase == "M3" or xsist_a == "MECE": 
        xconcl = "X"
    return xconcl 

# Crea un nuevo df (df_pos_avisos) con campos seleccionados.
#   Es la tabla maestra de avisos, puede servir para otras gráficas.
df_pos_avisos = DataFrame(Posic_avisos, columns = ["Aviso", "Clase de aviso",
         "Ubicac.técnica","Falla de Equipo", "Inicio avería", "MesInic", "Repercusión",
         "Orden", "Status sistema"]) 

# Columna FI. Indica si el aviso es de falla.
df_pos_avisos["FI"] = df_pos_avisos.apply(lambda x: xfi(x["Falla de Equipo"],
                                         x["Repercusión"]), axis = 1)

# Calcular los valores para mes de inicio, período y planta.
df_pos_avisos["MesInic"]   = df_pos_avisos["Inicio avería"].apply(lambda x: x[8:] + x[3:5])
df_pos_avisos["PER1"]      = df_pos_avisos["MesInic"].apply(xper1)
df_pos_avisos["Planta"]    = df_pos_avisos["Ubicac.técnica"].apply(lambda x: x[:3])

# Crear df de órdenes con los campos necesarios.
df_ordenes = DataFrame(Ordenes, columns = ["Orden", "Clase de orden", "Status sistema",
                                           "Status usuario"])

# Dejar solo los las posiciones de aviso para la planta solicitada y PER1 = "X"
df_pos_avisos = df_pos_avisos[(df_pos_avisos["Planta"]==Planta) & (df_pos_avisos["PER1"]=="X")]

# Eliminar los duplicados avisos duplicados en pos_avisos.
#    Un aviso de mantenimiento puede tener n posiciones, se necesita dejar una
#    sola posición por aviso.
df_pos_avisos = df_pos_avisos.drop_duplicates(subset="Aviso")

# Dejar en una misma tabla los datos de los avisos con el status de la orden asociada.
df_avisos_proc = pd.merge(df_pos_avisos, df_ordenes, on = "Orden", how = "outer")

# Como la tabla de avisos y la tabla de órdenes tienen un campo con el mismo nombre,
# el sistema le coloca al de avisos "Status sistema_x" y al otro "Status sistema_y".

df_avisos_proc["Concl"] = df_avisos_proc.apply(lambda x: yconcl(x["Status sistema_y"],
               x["Status usuario"], x["Clase de aviso"], x["Status sistema_x"]), axis = 1)

# Dejar solo las líneas correspondientes al período de 1 año.
#    Con el merge se se agregaron las filas de órdenes de cualquier período. 
df_avisos_proc = df_avisos_proc[df_avisos_proc["PER1"]=="X"]

# Crear un nuevo df simplificado (solo con los campos necesarios para graficar).
df_plot = df_avisos_proc

df_plot = df_plot.drop(['Aviso','Clase de aviso', 'Ubicac.técnica', 'Falla de Equipo',
       'Inicio avería', 'Repercusión', 'Orden', 'Status sistema_x',
       'FI', 'Planta', 'PER1', 'Clase de orden', 'Status sistema_y',
       'Status usuario'], axis = 1)

# Crear una columna de "No concluidos" a partir de la de "Concluidos".
df_plot["NotConcl"] = df_plot["Concl"].apply(lambda x: "" if (x == "X") else "X")

# Crear una columna para emitidos.
df_plot["Emit"] = df_plot.apply(lambda x: x["Concl"] + x["NotConcl"], axis = 1)

# Crear un df solo para avisos emitidos.
df_Emit = df_plot[df_plot["Emit"]=="X"]
df_Emit = df_Emit.drop(["Concl","NotConcl"], axis=1)

# Crear un df solo para avisos concluidos.
df_Conc = df_plot[df_plot["Concl"]=="X"]
df_Conc = df_Conc.drop(["Emit","NotConcl"], axis=1)

# Agrupar cada df por mes y contar.
df_Emit = df_Emit.groupby("MesInic").size().reset_index(name='Emitidos')
df_Conc = df_Conc.groupby("MesInic").size().reset_index(name='Conclx')

# Crear un nuevo df (df1) mediante la unión de df_Emit y df_Conc.
# df1 = pd.merge(df_Emit, df_Conc, on = "MesInic", how = "outer")
df1 = pd.merge(df_Emit, df_Conc, on = "MesInic", how = "outer" )

# Convierte los valores Nan (si es que los hay) a 0.
df1 = df1.fillna(0)

###### Preparación para graficar la tabla df1.

# Esto convierte el contenido de dataframe en listas (para poder graficar)
Mes_c = []
Conc = []
Emit = []

for i in range(len(df1)):
    Mes_c = Mes_c + [df1["MesInic"][i]]
    Emit = Emit + [df1["Emitidos"][i]]
    Conc = Conc + [int(df1["Conclx"][i])]

AAMM = list(reversed(AAMM))


N = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
def month_filling(mesx, valorx):
    K_list = "".join(mesx)
 
    for i in range(12-len(valorx)):
        valorx.append(0)

    j = 0
    for i in range(12):
        if K_list.find(AAMM[i]) != -1:
            N[i] = valorx[j]
            j = j + 1
    return N

N = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
month_filling(Mes_c, Emit)
Emit = N

N = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
month_filling(Mes_c, Conc)
Conc = N

Mes_letras = list(map(mesletras, AAMM))


# RESULTADO:
#   Lista "Mes_letras" contiene los meses en letras para el eje horizontal (x).
#   Lista "Emit" contiene la cantidad de avisos emitidos por mes.
#   Lista "Conc" contiene la cantidad de avisos concluidos por mes.

print(Mes_letras)
print(Emit)
print(Conc)


