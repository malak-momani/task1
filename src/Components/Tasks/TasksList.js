import { useContext, useEffect, useState } from "react";
import Task from "./Task";
import Filter from "./Filter/Filter";
import { TasksContext } from "../../Contexts/TasksContext";

const TaskList = ({ tasks }) => {

    const { filter } = useContext(TasksContext);
    return (
        <div className="task-list">
            <Filter />
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
    )

}

export default TaskList;