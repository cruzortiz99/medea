import rx
from flask import Flask
from rx.operators import subscribe_on

from config import HOST, PORT
from utils.threadpoll import POOL_SCHEDULER
from utils.webbrowser import open_web_browser

APP = Flask(__name__)


@APP.route("/", methods=["GET"])
def home():
    return rx.of("Hola mundo").run()


def run_server(observer: rx.core.observer.observer.Observer, scheduler):
    APP.run(host=HOST, port=PORT)
    observer.on_next(True)
    observer.on_completed()


if __name__ == '__main__':
    rx.merge(
        rx.create(open_web_browser(HOST, PORT)).pipe(
            subscribe_on(POOL_SCHEDULER)),
        rx.create(run_server)
    ).subscribe(
        on_next=print,
        on_error=print,
        on_completed=lambda: print("Done")
    )
