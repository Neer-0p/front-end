import React, { useState } from 'react'

function Todolist() {

    const [task, settask] = useState("")
    const [tasks, settasks] = useState([])

    // add task
    const add = () => {
        if (task === "") {
            alert("Enter a task")
            return
        }
        settasks([...tasks, { text: task, completed: false }])
        settask("")
    }

    // delete task   
    const del = (index) => {
        const updatedtasks = tasks.filter((_, i) => i !== index)
        settasks(updatedtasks)
    }


    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4 text-primary">To-Do List</h2>
                {/* Input Section */}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter a new task..." value={task} onChange={(e) => settask(e.target.value)} />
                    <button className="btn btn-success" onClick={add}>
                        Add
                    </button>
                </div>

                {/* Task List */}
                <ul className="list-group">
                    {tasks.length === 0 ? (
                        <li className='list-group-item'></li>
                    ) : (
                        tasks.map((item, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <span> {item.text} </span>

                                <div>
                                    <button className="btn btn-sm btn-danger" onClick={() => del(index)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Todolist