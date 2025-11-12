import { useEffect, useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
    return (
        <div className="task-list">
            {tasks?.map((task, idx) =>
                <Task key={idx} task={task}
                />)}
        </div>
    )

}

export default TaskList;