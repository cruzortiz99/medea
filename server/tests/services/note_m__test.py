import unittest
from typing import List

import rx
from models.NoteM3 import NoteM3
from rx import operators as op

from services.note_m import get_notes_m3


class TestAlertAndFailures(unittest.TestCase):

    def test_notes_m3(self):
        notes_m3 = get_notes_m3()

        def filter_note_m3_by_excecutor(
                excecutor: str, note_list: List[NoteM3]) -> int:
            return rx.from_iterable(note_list).pipe(
                op.count(lambda note_m: note_m.excecutor == excecutor)
            ).run()
        operator_notes_m3 = filter_note_m3_by_excecutor("Operador", notes_m3)
        mantenedor_notes_m3 = filter_note_m3_by_excecutor(
            "Mantenedor", notes_m3)
        sin_inform_notes_m3 = filter_note_m3_by_excecutor(
            "Sin inform", notes_m3)
        total_notes_m3 = filter_note_m3_by_excecutor("Total", notes_m3)
        self.assertEqual(1, operator_notes_m3)
        self.assertEqual(1, mantenedor_notes_m3)
        self.assertEqual(1, sin_inform_notes_m3)
        self.assertEqual(1, total_notes_m3)


if __name__ == "__main__":
    unittest.main()
