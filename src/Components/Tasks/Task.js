import { useContext, useState } from 'react';
import './tasks.css'
import { TasksContext } from '../../Contexts/TasksContext';

const Task = ({ task }) => {

    const [isCompleted, setIsCompleted] = useState(task?.completed);
    const { toggleTask } = useContext(TasksContext)

    const handleCheckboxChange = (event) => {
        setIsCompleted(event.target.checked);
        toggleTask(task?.id)
    };

    return (
        <div className="one-task">
            <p>{task?.text}</p>
            <div className='task-controls'>
                <div>
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <p>edit</p>
                <p>delete</p>
            </div>
        </div>
    )

}

export default Task;