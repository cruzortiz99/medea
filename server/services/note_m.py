from functools import reduce
from typing import List
from models import NoteM


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
