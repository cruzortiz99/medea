from functools import reduce
from typing import List
from models import NoteM
from models import NoteM2


def get_notes_m3() -> List[NoteM]:
    notes = [
        NoteM("Operador", 1, 2.0, 1),
        NoteM("Mantenedor", 2, 4.0, 2),
        NoteM("Sin inform", 0, 0.0, 0),
    ]

    def calculate_total(acc: NoteM, current: NoteM) -> NoteM:
        return NoteM(
            acc.excecutor,
            acc.amount +
            current.amount,
            acc.hours +
            current.hours,
            acc.with_out_ff +
            current.with_out_ff)
    total = reduce(calculate_total, notes, NoteM("Total", 0, 0.0, 0))
    return notes + [total]
    

def get_notes_m2() -> List[NoteM2]:
    notes = [
        NoteM2("Operador", 1, 2.0, 1),
        NoteM2("Mantenedor", 2, 4.0, 2),
        NoteM2("Sin inform", 0, 0.0, 0),
    ]

    def calculate_total(acc: NoteM2, current: NoteM2) -> NoteM2:
        return NoteM2(
            acc.excecutor,
            acc.amount +
            current.amount,
            acc.hours +
            current.hours,
            acc.with_out_ff +
            current.with_out_ff)
    total = reduce(calculate_total, notes, NoteM2("Total", 0, 0.0, 0))
    return notes + [total]