import React, { useState } from "react";

import "./todo.style.scss";

import { v4 as uuidv4 } from "uuid";

function Todo({ title, removeItem, id }) {
    const [check, setCheck] = useState(false);

    const checkItem = () => {
        setCheck((prevState) => {
            return !prevState;
        });
    };
    return (
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
            <p className="close-btn" onClick={() => removeItem(id)}>
                X
            </p>
            <p>Edit</p>
        </div>
    );
}

export default Todo;
