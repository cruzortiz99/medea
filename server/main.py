import rx
from flask import Flask, send_file
from werkzeug.wrappers.response import Response

from config import HOST, PORT
from modules.web_app import WEB_APP
from utils.browser import open_web_browser
from constants import ASSETS_FOLDER

APP = Flask(
    __name__,
    static_folder=ASSETS_FOLDER, static_url_path="/static")

APP.register_blueprint(WEB_APP)


if __name__ == '__main__':
    rx.create(
        open_web_browser(HOST, PORT)
    ).subscribe(
        on_next=lambda _: APP.run(host=HOST, port=PORT),
        on_error=print,
        on_completed=print)
