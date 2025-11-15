import { useContext } from "react";
import AddTask from "../Tasks/AddTask";
import TaskList from "../Tasks/TasksList";
import { TasksContext } from "../../Contexts/TasksContext";
import ToggleTheme from "../ThemeToggle/ThemeToggle";

const Main = () => {
    const { tasks } = useContext(TasksContext)
    console.log(tasks)
    return (
        <div>
            <ToggleTheme />
            <AddTask />
            <TaskList tasks={tasks} />
        </div>
    )

}

export default Main;