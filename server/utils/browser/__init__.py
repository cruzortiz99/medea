import webbrowser
from typing import Callable, Optional

from rx.core.typing import Disposable, Observer, Scheduler


def open_web_browser(
    host: str, port: int) -> Callable[
    [Observer[bool], Optional[Scheduler]],
        Disposable]:
    def wrapped(observer: Observer, _: Optional[Scheduler] = None):
        webbrowser.open(f"http://{host}:{port}/app")
        observer.on_next(True)
        observer.on_completed()
    return wrapped
