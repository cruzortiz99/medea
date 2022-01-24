import rx
from rx import operators as op
from flasgger import Swagger
from flask import Flask
from werkzeug.wrappers.response import Response

from config import HOST, PORT, SWAGGER_TEMPLATE, SWAGGER_CONFIG, MODE
from constants import ASSETS_FOLDER
from modules.alert_anf_failures import ALERT_AND_FAILURES
from modules.web_app import WEB_APP
from utils.threadpoll import POOL_SCHEDULER
from utils.browser import open_web_browser

APP = Flask(
    __name__,
    static_folder=ASSETS_FOLDER, static_url_path="/static")
swagger = Swagger(APP, config=SWAGGER_CONFIG, template=SWAGGER_TEMPLATE)

APP.register_blueprint(ALERT_AND_FAILURES)
APP.register_blueprint(WEB_APP)


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
