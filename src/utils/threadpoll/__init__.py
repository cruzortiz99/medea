

from rx.scheduler.threadpoolscheduler import ThreadPoolScheduler
import multiprocessing

POOL_SCHEDULER = ThreadPoolScheduler(multiprocessing.cpu_count())
