import unittest

from modules.alerts_and_failures import add


class TestAlertAndFailures(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(15, 20), 35)


if __name__ == "__main__":
    unittest.main()
