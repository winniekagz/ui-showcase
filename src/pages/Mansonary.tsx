import React, { useState } from "react";
import Card from "../components/mansionaryui/Card";
import { taskList } from "../data/mansonary";

export default function Mansonary() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tasks based on the search query
  const filteredTasks = taskList.filter(
    (task) =>
      task.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.priorityTaskTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-200 w-[100vw] h-[100vh] p-12 overflow-y-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-3">
        <h1 className="p-5 text-2xl font-bold">Mansonary Layout</h1>
        <div className="flex gap-2">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="md:columns-2xs lg:columns-3xs gap-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <div key={index} className="mb-4 break-inside-avoid-column">
              <Card task={task} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks found</p>
        )}
      </div>
    </div>
  );
}
