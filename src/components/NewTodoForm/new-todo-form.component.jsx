import React, { useState } from "react";

import "./new-todo-form.style.scss";

import { v4 as uuidv4 } from "uuid";

function NewTodoForm({ addItem }) {
    const [todo, setTodo] = useState({ title: "", id: "", completed: false });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = { ...todo, completed: false, id: uuidv4() };
        addItem(newTodo);
        setTodo({ title: "" });
    };

    const handleChange = (event) => {
        setTodo({ title: event.target.value });
    };

    console.log(todo.title);

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <div className="input-container">
                <br />
                <input
                    id="todo.title"
                    name="todo.title"
                    type="text"
                    value={todo.title || ""}
                    placeholder="Todo"
                    onChange={handleChange}
                />
                <button>ADD TODO</button>
            </div>
        </form>
    );
}

export default NewTodoForm;
