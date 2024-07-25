# app/background_tasks.py

from fastapi import BackgroundTasks, FastAPI

app = FastAPI()

def example_background_task(param):
    # Long-running task logic here
    pass

@app.post("/start-task")
async def start_task(background_tasks: BackgroundTasks, param: str):
    background_tasks.add_task(example_background_task, param)
    return {"message": "Task started"}
