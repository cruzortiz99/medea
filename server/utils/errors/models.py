import http
from models.APIError import APIError


class NotFoundError(APIError):
    def __init__(self, message: str, *args: object):
        super().__init__(
            "Not Found Error",
            message,
            http.HTTPStatus.NOT_FOUND.value,
            args)


class BadRequestError(APIError):
    def __init__(self, message: str, *args: object):
        super().__init__(
            "Bad Request Error",
            message,
            http.HTTPStatus.BAD_REQUEST.value,
            *args)


class ServerInternalError(APIError):
    def __init__(self, message: str, *args: object):
        super().__init__(
            "Server Internal Error",
            message,
            http.HTTPStatus.INTERNAL_SERVER_ERROR.value,
            *args)
