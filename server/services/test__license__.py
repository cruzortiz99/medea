import json
import re
import unittest
from pathlib import Path

import jwt
import rx.operators as rx_op
from config import PUBLIC_KEY
from constants import ASSETS_FOLDER
from models import License
from rx import from_callable, of
from services.license import check_license
from services.license import create_license, delete_license


class TestLicenseService(unittest.TestCase):
    def test_create_license(self):
        create_license(
            "test",
            License(True, True, True, True, True, True, True, True)
        ).pipe(
            rx_op.do_action(lambda license_data: self.assertTrue(
                isinstance(license_data, License)
            )),
            rx_op.do_action(lambda _: self.assertTrue(
                Path(
                    ASSETS_FOLDER
                ).joinpath("license-test.txt").exists())),
            rx_op.do_action(
                lambda _: Path(
                    ASSETS_FOLDER
                ).joinpath("license-test.txt").unlink())
        ).run()

    def test_delete_license(self):
        of(
            open(
                Path(ASSETS_FOLDER).joinpath("license-test.txt"),
                "w", encoding="utf8")
        ).pipe(
            rx_op.do_action(
                lambda file: file.close()),
            rx_op.flat_map(
                lambda _: delete_license("test")),
            rx_op.do_action(
                lambda response: self.assertRegex(
                    response, re.compile(
                        r"ok", re.IGNORECASE))),
            rx_op.do_action(
                lambda _: self.assertFalse(
                    Path(
                        ASSETS_FOLDER
                    ).joinpath("license-test.txt").exists()))
        ).run()

    def test_check_license(self):
        def create_license_file():
            license_data = License(
                True, False, True, True, True, True, True, True)
            file = open(
                Path(ASSETS_FOLDER).joinpath(
                    "license-test.txt"), mode="w", encoding="utf8")
            file.write(
                jwt.encode(license_data.__dict__,
                           PUBLIC_KEY, "HS256"))
            file.close()
        from_callable(create_license_file).pipe(
            rx_op.flat_map(
                lambda _: check_license("test")),
            rx_op.do_action(
                lambda license_data: self.assertTrue(
                    isinstance(
                        license_data, License))),
            rx_op.do_action(
                lambda license_data: self.assertTrue(
                    license_data.alert_and_failure)),
            rx_op.do_action(
                lambda license_data: self.assertTrue(
                    license_data.budget)),
            rx_op.do_action(
                lambda license_data: self.assertFalse(
                    license_data.orders)
            )
        ).run()


if __name__ == "__main__":
    unittest.main()
