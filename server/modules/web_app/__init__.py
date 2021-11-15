from flask import Blueprint, send_file
from werkzeug.wrappers.response import Response

from constants import ASSETS_FOLDER


WEB_APP = Blueprint(
    "app",
    __name__,
    url_prefix="",
    static_folder=ASSETS_FOLDER.joinpath("app"),
    static_url_path="/app")


@WEB_APP.route("/", defaults={"subroute": ""}, methods=["GET"])
@WEB_APP.route("/<path:subroute>", methods=["GET"])
def home(subroute: str = "") -> Response:
    print(f"Home[subroute:{subroute}]")
    return send_file(ASSETS_FOLDER.joinpath("app").joinpath("index.html"))
