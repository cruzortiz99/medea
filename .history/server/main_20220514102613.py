import rx
from flasgger import Swagger
from flask import Flask, Response
from rx import operators as op

from config import HOST, MODE, PORT, SWAGGER_CONFIG
from constants import ASSETS_FOLDER
from docs import SWAGGER_TEMPLATE
from modules.api import ALERT_AND_FAILURES, API_ROOT, UPLOAD
from modules.web_app import WEB_APP
from utils.browser import open_web_browser

APP = Flask(
    __name__,
    static_folder=ASSETS_FOLDER, static_url_path="/static")
swagger = Swagger(APP, config=SWAGGER_CONFIG, template=SWAGGER_TEMPLATE)

APP.register_blueprint(ALERT_AND_FAILURES)
APP.register_blueprint(UPLOAD)
APP.register_blueprint(API_ROOT)
APP.register_blueprint(WEB_APP)


@APP.after_request
def add_cors(response) -> Response:
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers[
        "Access-Control-Allow-Methods"
    ] = "POST, GET, PUT, PATCH, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response


if __name__ == '__main__':
    rx.create(
        open_web_browser(
            HOST,
            PORT)).pipe(
        op.flat_map(
            lambda _: rx.if_then(
                lambda: MODE == "DEV",
                rx.create(
                    open_web_browser(
                        HOST,
                        PORT,
                        "apidocs")),
                rx.empty()))
    ).subscribe(
        on_next=lambda _: APP.run(
            host=HOST,
            port=PORT),
        on_error=print,
        on_completed=print)
