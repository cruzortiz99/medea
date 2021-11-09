
import rx
from flask import Flask

from config import HOST, PORT
from utils.browser import open_web_browser

APP = Flask(__name__)


@APP.route("/", methods=["GET"])
def home():
    return rx.of("Hola mundo").run()


def run_server():
    APP.run(host=HOST, port=PORT)


if __name__ == '__main__':
    rx.create(open_web_browser(HOST, PORT)).subscribe(
        on_next=lambda _: run_server(),
        on_error=print,
        on_completed=print)
