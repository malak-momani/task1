import { useContext, useState } from 'react';
import './tasks.css'
import { TasksContext } from '../../Contexts/TasksContext';
import Edit from '../../assests/edit.png';
import Delete from '../../assests/bin.png';

const Task = ({ task }) => {

    const [isCompleted, setIsCompleted] = useState(task?.completed);
    const { toggleTask, deleteTask } = useContext(TasksContext)

    const handleCheckboxChange = (event) => {
        setIsCompleted(event.target.checked);
        toggleTask(task?.id)
    };

    const handleEdit = () => {

    }

    const handleDelete = () => {
        deleteTask(task?.id)
    }

    return (
        <div className="one-task">
            <p>{task?.text}</p>
            <div className='task-controls'>
                <div className='flex-item'>
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <button className='flex-item' onClick={handleEdit}>
                    <img src={Edit} alt='edit' className='edit' />
                </button>
                <button className='flex-item' onClick={handleDelete}>
                    <img src={Delete} alt='delete' className='delete' />
                </button>
            </div>
        </div>
    )

}

export default Task;