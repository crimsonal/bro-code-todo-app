import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }

    return (
    <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
            />
            <button className="add-btn"
            onClick={addTask}>Add</button>
            
            
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li
                key={index}>
                <span className="text">{task}</span>
                <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                </li>
            )}
        </ol>
    </div>
    )
}

export default ToDoList