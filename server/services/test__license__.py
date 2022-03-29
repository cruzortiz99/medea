from pathlib import Path
import unittest
from rx import of
import rx.operators as rx_op
from constants import ASSETS_FOLDER
from services.license import create_license, delete_license
from models import License
import re


class TestLicenseService(unittest.TestCase):
    def test_create_license(self):
        create_license().pipe(
            rx_op.do_action(lambda license_data: self.assertTrue(
                isinstance(license_data, License)
            )),
            rx_op.do_action(lambda _: self.assertTrue(
                Path(
                    ASSETS_FOLDER
                ).joinpath("license.json").exists())),
            rx_op.do_action(
                lambda _: Path(
                    ASSETS_FOLDER
                ).joinpath("license.json").unlink())
        ).run()

    def test_delete_license(self):
        of(
            open(
                Path(ASSETS_FOLDER).joinpath("license.json"),
                "w", encoding="utf8")
        ).pipe(
            rx_op.do_action(
                lambda file: file.close()),
            rx_op.flat_map(
                lambda _: delete_license()),
            rx_op.do_action(
                lambda response: self.assertRegex(
                    response, re.compile(
                        r"ok", re.IGNORECASE))),
            rx_op.do_action(
                lambda _: self.assertFalse(
                    Path(ASSETS_FOLDER).joinpath("license.json").exists()))
        ).run()


if __name__ == "__main__":
    unittest.main()
