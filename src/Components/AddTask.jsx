import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../Features/TaskSlice';

const AddTask = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('TO DO');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            title,
            description,
            completed: status,
        }
        dispatch(addTask(newTask));
        setTitle('');
        setDescription('');
        setStatus('To Do');
    }

  return (
    <div>
        <form className='mb-2' onSubmit={handleSubmit}>
            <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Add a New Task</h2>
            <div className='mb-4'>
                <input type="text"
                placeholder='Task Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                required
                 />
            </div>
            <div className='mb-4'>
                <textarea
                placeholder='Task Description'
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                rows='3'
                required
                ></textarea>
            </div>
            <div className='mb-4'>
                <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}   
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <button type='submit' className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 cursor-pointer'>Add Task</button>
        </form>
    </div>
  )
}

export default AddTask