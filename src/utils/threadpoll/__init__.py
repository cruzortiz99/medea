

from threading import main_thread
from rx.scheduler.threadpoolscheduler import ThreadPoolScheduler
import multiprocessing

POOL_SCHEDULER = ThreadPoolScheduler(multiprocessing.cpu_count())
MAIN_THREAD = main_thread()
