import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../Features/TaskSlice";

const EditTask = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, title, description, completed: status })); 
    setIsEditing(false);
  };
  return (
    <div>
      {isEditing ? (
        <div className="absolute bg-white p-4 rounded-md shadow-lg z-10">
          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            Edit Task
          </h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-2 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700" onClick={handleEdit}>Save</button>
            <button className= "px-2 bg-gray-300 py-2 rounded-md"onClick={() => setIsEditing(false)} >Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <button
            className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default EditTask;
