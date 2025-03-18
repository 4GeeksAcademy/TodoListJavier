import React, { useEffect, useState } from "react";

const TodoList = () => {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const addTask = (e) => {
    if (input.trim() !== "" && e.key === "Enter") {
      setTasks([...tasks, input]);
      setInput(""); 
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  
  return (
    <div className="container p-4 " id="firstCont">
      <h1 className="text-2xl font-bold text-center mb-4">My list of tasks</h1>

      {/* Input para agregar nuevas tareas */}
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => addTask(e)}
          className="border p-2 flex-grow"
          placeholder="Add a new task..."
        />
      </div>

      {/* Lista de tareas */}
      <div className="border p-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 border-b"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <span>{task}</span>
            {hoveredIndex === index && (
              <button
                onClick={() => removeTask(index)}
                className="ml-2 p-1 bg-red-500 text-white rounded"
              >
                🗑
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;