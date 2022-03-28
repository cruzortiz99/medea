from rx import Observable, if_then, of

from models import APIError
from .models import ServerInternalError


def handle_error(exception: Exception, _: Observable) -> Observable:
    return if_then(
        lambda: isinstance(exception, APIError),
        of(exception),
        of(ServerInternalError)
    )
