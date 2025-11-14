import { useContext, useEffect, useState } from "react";
import Task from "./Task";
import Filter from "./Filter/Filter";
import { TasksContext } from "../../Contexts/TasksContext";
import './tasks.css'

const TaskList = ({ tasks }) => {

    const { filter } = useContext(TasksContext);
    return (
        <div className="tasks-filter">
            <Filter />
            <div className="task-list">
                {tasks?.map((task, idx) => {
                    switch (filter) {
                        case 'completed':
                            { return task.completed && <Task key={idx} task={task} /> }
                        case 'pending':
                            { return !task.completed && <Task key={idx} task={task} /> }
                        default:
                            return <Task key={idx} task={task} />
                    }


                }
                )}
            </div>

        </div>

    )

}

export default TaskList;