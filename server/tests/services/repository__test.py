import unittest
from models.Repository import Repository
from services.repository import getFolders

class TestRepository(unittest.TestCase):
    def testGetFolders(self):
        csv = getFolders('.csv')
        xlsx = getFolders('.xlsx')
        self.assertNotIn([], csv)
        self.assertNotIn([], xlsx)

if __name__ == "__main__":
    unittest.main()
