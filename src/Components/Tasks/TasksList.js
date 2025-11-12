import { useEffect, useState } from "react";
import Task from "./Task";
import Filter from "./Filter/Filter";

const TaskList = ({ tasks }) => {
    return (
        <div className="task-list">
            <Filter />
            {tasks?.map((task, idx) =>
                <Task key={idx} task={task}
                />)}
        </div>
    )

}

export default TaskList;