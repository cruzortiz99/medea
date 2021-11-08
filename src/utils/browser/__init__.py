import webbrowser
from typing import Callable

from rx.core.observer.observer import Observer
from rx.core.typing import Scheduler


def open_web_browser(
        host: str, port: int) -> Callable[[Observer, Scheduler], None]:
    def wrapped(observer: Observer, _: Scheduler):
        webbrowser.open(f"http://{host}:{port}")
        observer.on_next(True)
        observer.on_completed()
    return wrapped
