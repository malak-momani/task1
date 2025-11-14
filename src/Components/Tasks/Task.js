import { useContext, useState } from 'react';
import './tasks.css'
import { TasksContext } from '../../Contexts/TasksContext';
import Edit from '../../assests/edit.png';
import Delete from '../../assests/bin.png';

const Task = ({ task }) => {

    const [isCompleted, setIsCompleted] = useState(task?.completed);
    const [editMode, setEditMode] = useState(false);
    const [editedTask, seteditedTask] = useState(task?.text);
    const { toggleTask, deleteTask, editTask } = useContext(TasksContext)

    const handleCheckboxChange = (event) => {
        setIsCompleted(event.target.checked);
        toggleTask(task?.id)
    };

    const handleChange = (event) => {
        seteditedTask(event.target.value)
    };


    const handleEdit = () => {
        editTask(task?.id, editedTask)
    }

    const handleDelete = () => {
        deleteTask(task?.id)
    }

    return (
        <div className="one-task">
            {editMode ?
                <div>
                    <input placeholder="New Task"
                        type="text"
                        value={editedTask}
                        onChange={handleChange}
                        className="edit-field"
                    />
                    <button onClick={() => {
                        handleEdit();
                        setEditMode(false)
                    }}
                        className="add-button amaranth-regular">Done</button>
                </div>
                :
                <div className='flex-item'>{task?.text}</div>
            }
            <div className='task-controls'>
                <div className='flex-item'>
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <button className='flex-item' onClick={() => setEditMode(true)}>
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