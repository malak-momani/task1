import { createContext, useState } from "react";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage('todoTasks', []);
    const [filter, setFilter] = useState('all')

    const addTask = (taskText, id) => {
        const newTask = { id, text: taskText, completed: false };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const toggleTask = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    const editTask = (id, newTask) => {
        setTasks(prevTasks =>
            prevTasks?.map(task => task.id === id ? { ...task, text: newTask } : task));
    };

    const changeFilter = (filterType) => {
        setFilter(filterType)
    }

    const contextValue = {
        tasks,
        filter,
        setTasks,
        addTask,
        toggleTask,
        deleteTask,
        changeFilter,
        editTask
    }

    return (
        <TasksContext.Provider value={contextValue}>
            {children}
        </TasksContext.Provider>
    );
}

export { TasksContext, TasksProvider }
