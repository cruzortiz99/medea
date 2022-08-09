from pathlib import Path

ASSETS_FOLDER = Path(__file__).parent.parent.joinpath("assets")
REPOSITORY_STORAGE = ASSETS_FOLDER.joinpath("storage")
VALID_DATA_FILES_NAMES = ["iw39", "iw69", "iw69e", "ih06", "iw47"]
DOC_FOLDER = Path(__file__).parent.parent.joinpath("docs")
