import { createContext } from "react";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage('todoTasks', []);

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

    const contextValue = {
        tasks, setTasks, addTask, toggleTask, deleteTask
    }

    return (
        <TasksContext.Provider value={contextValue}>
            {children}
        </TasksContext.Provider>
    );
}

export { TasksContext, TasksProvider }
