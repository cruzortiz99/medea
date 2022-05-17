from typing import List
from models import TemporallyRepair


def get_temporally_repairs() -> List[TemporallyRepair]:
    return [
        TemporallyRepair(1,
                         "10014450",
                         "10033120",
                         "HG4100A",
                         "Homogeneizador A de productos",
                         "Reemplazar estoperas en Homog UHT",
                         "22/07/2021",
                         "EMAT",
                         "HG4100A"),
        TemporallyRepair(2,
                         "10014401",
                         "10033061",
                         "ZM2442A",
                         "Motor A de recolector y elevador Z2442",
                         "Reemplazar Contactor recolector",
                         "14/07/2021",
                         "PROG",
                         "Z2442"),
        TemporallyRepair(3,
                         "10014150",
                         "10032812",
                         "DALPAST",
                         "Pasteurizacion",
                         "Remplazar seleccionador y porta",
                         "15/06/2021",
                         "PROG",
                         "DALPAST"),
        TemporallyRepair(4,
                         "10013712",
                         "10032162",
                         "PM1131",
                         "Motor boma transf. tolva a pulmon P1131",
                         "Peemplazar LIQUID TIGHT",
                         "06/04/2021",
                         "ESPR",
                         "PM1131",),
        TemporallyRepair(5,
                         "10030636",
                         "100313376",
                         "",
                         "**Aviso con mas de 2 años / error texto ODM",
                         "Reemplazar bloque auxiliar y c",
                         "29/01/2021",
                         "EMAT",
                         "CYM1201")
    ]