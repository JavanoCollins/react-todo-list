import React, { useState } from "react";

import "./todo.style.scss";

import { v4 as uuidv4 } from "uuid";

function Todo({ id, title, removeItem, updateItem}) {
    const [check, setCheck] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editTask, setEditTask] = useState(title);

    const checkItem = () => {
        setCheck((prevState) => {
            return !prevState;
        });
    };

    const toggleEdit = () => {
        setEdit((prevState) => {
            return !prevState;
        });
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        updateItem(id, editTask)
        toggleEdit()
    };

    const handleChange = (event) => {
        setEditTask((prevState) => {
            return (prevState = event.target.value);
        });
    };

    let result;

    if (edit) {
        result = (
            <div>
                <form onSubmit={handleUpdate} className="edit-form">
                    <input
                        className="edit-task"
                        name="editTask"
                        type="text"
                        value={editTask}
                        onChange={handleChange}
                    />
                    <div className="edit-btns">
                        <button className="edit-save-btn">👍🏿</button>
                        <button className="edit-cancel-btn" onClick={toggleEdit}>🙅🏿‍♂️</button>
                    </div>
                </form>
            </div>
        );
    } else {
        result = (
            <div className="Todo">
                <p
                    className="title"
                    style={{
                        textDecoration: `${check ? "line-through" : ""}`,
                    }}
                    onClick={checkItem}
                >
                    {title}
                </p>
                <div className="button">
                    <button className="edit-btn" onClick={toggleEdit}>
                        Edit
                    </button>
                    <button
                        className="close-btn"
                        onClick={() => removeItem(id)}
                    >
                        X
                    </button>
                </div>
            </div>
        );
    }

    return result;
}

export default Todo;
