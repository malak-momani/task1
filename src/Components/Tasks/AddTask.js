import { useContext, useEffect, useId, useState } from "react";
import './tasks.css'
import { TasksContext } from "../../Contexts/TasksContext";

const AddTask = () => {
    const [task, setTask] = useState('');
    const { addTask } = useContext(TasksContext);
    const handleChange = (event) => {
        setTask(event.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.random().toString(6).substr(2, 9)
        addTask(task, id)
        setTask('');
    }

    return (
        <div className="task-form">
            <input placeholder="New Task"
                type="text"
                value={task}
                onChange={handleChange}
                className="task-field"
            />
            <button onClick={handleSubmit} className="add-button amaranth-regular">ADD</button>
        </div>
    );

}

export default AddTask;