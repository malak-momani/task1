import { useEffect, useState } from "react";
import './addTask.css'

const AddTask = () => {
    const [tasks, settasks] = useState({
        current: '',
        all: [],
    });

    const handleChange = (event) => {
        settasks({
            ...tasks,
            current: event.target.value,
        })
    };

    const handleSubmit = () => {
        settasks({
            all: [...tasks.all, tasks.current],
            current: ''
        })
    };

    const saveTasksToLocalStorage = (tasks) => {
        localStorage.setItem('todoTasks', JSON.stringify(tasks?.all));
    }

    useEffect(() => {
        saveTasksToLocalStorage(tasks);
    }, [tasks.all])
    return (
        <div className="task-form">
            <label>
                New Task:
                <input type="text" value={tasks?.current} onChange={handleChange} className="task-field" />
            </label>
            <button onClick={handleSubmit} className="add-button">ADD</button>
            <p>{tasks.current}</p>
        </div>
    );

}

export default AddTask;