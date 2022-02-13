from typing import Generic, TypeVar


T = TypeVar('T')


class APIResponseModel(Generic[T]):

    def __init__(self, data: T):
        self.data = data
