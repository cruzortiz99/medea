import rx
from flask import Flask, send_file
from werkzeug.wrappers.response import Response

from config import HOST, PORT
from utils.browser import open_web_browser
from constants import ASSETS_FOLDER

APP = Flask(
    __name__,
    static_folder=ASSETS_FOLDER.joinpath("app"), static_url_path="/app/")


@APP.route("/", defaults={"subroute": ""}, methods=["GET"])
@APP.route("/<path:subroute>", methods=["GET"])
def home(subroute: str = "") -> Response:
    return send_file(ASSETS_FOLDER.joinpath("app").joinpath("index.html"))


if __name__ == '__main__':
    rx.create(open_web_browser(HOST, PORT)).subscribe(
        on_next=lambda _: APP.run(host=HOST, port=PORT),
        on_error=print,
        on_completed=print)
