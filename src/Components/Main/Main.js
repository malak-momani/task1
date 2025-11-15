import { useContext } from "react";
import AddTask from "../Tasks/AddTask";
import TaskList from "../Tasks/TasksList";
import { TasksContext } from "../../Contexts/TasksContext";
import ToggleTheme from "../ThemeToggle/ThemeToggle";
import "./Main.css"

const Main = () => {
    const { tasks } = useContext(TasksContext)
    console.log(tasks)
    return (
        <div>
            <div className="first-container">
                <ToggleTheme />
                <AddTask />
            </div>
            <TaskList tasks={tasks} />
        </div>
    )

}

export default Main;