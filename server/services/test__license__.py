import unittest
import rx.operators as rx_op
from services.license import create_license
from models import License


class TestLicenseService(unittest.TestCase):
    def test_create_license(self):
        create_license().pipe(
            rx_op.do_action(lambda license_data: self.assertTrue(
                isinstance(license_data, License)
            ))
        ).subscribe()


if __name__ == "__main__":
    unittest.main()
