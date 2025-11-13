import { useContext } from 'react';
import './filter.css'
import { TasksContext } from '../../../Contexts/TasksContext';

const Filter = () => {
    const { changeFilter } = useContext(TasksContext)

    return (
        <div className='container'>
            <button className='item'
                value='all'
                onClick={() => changeFilter('all')}>
                All
            </button>
            <button
                className='item'
                value='completed'
                onClick={() => changeFilter('completed')}>
                completed
            </button>
            <button
                className='item'
                value='pending'
                onClick={() => changeFilter('pending')}>
                Pending
            </button>
        </div>
    )
}

export default Filter;