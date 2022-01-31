import unittest

from modules.alerts_and_failures import add


class TestAlertAndFailures(unittest.TestCase):
    def add_test(self):
        """test1"""
        self.assertEqual(add(30, 15), 45)


if __name__ == "__main__":
    unittest.main()
