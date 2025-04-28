import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, fetchTodo } from '../Features/TaskSlice';
import EditTask from './EditTask';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    const [filter, setFilter] = useState('all'); 

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const filteredTasks = tasks.filter(task =>
        filter === 'all' || task.status === filter
    );

    return (
        <div>
            <div>
                <div className="mb-4 flex justify-between">
                <h2 className="text-xl font-semibold mb-3 text-indigo-500">Tasks</h2>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className=" cursor-pointer px-5 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-50"
                    >
                        <option value="all">All</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <ul className="space-y-4">
                    {filteredTasks.map(task => (
                        <li key={task.id} className="bg-gray-50 rounded-md shadow-sm flex justify-between p-4 items-center">
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">{task.title}</h3>
                                {task.description && <p className="text-gray-600">{task.description}</p>}
                                <p className="mt-1 text-sm font-semibold">
                                    <span className="italic underline">Status: {task.status}</span>
                                </p>
                            </div>
                            <div className="flex space-x-2">
                                <EditTask task={task} />
                                <button
                                    className="cursor-pointer px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    onClick={() => handleDelete(task.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;