import React, { useState, useReducer } from "react";
import NewTodoForm from "../NewTodoForm/new-todo-form.component";

import "./todo-list.style.scss";

import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/todo.component";

const ACTIONS = {
    REMOVE_TODO: "REMOVE_TODO",
    ADD_TODO: "ADD_TODO",
    UPDATE_TODO: "UPDATE_TODO",
};

const todoListReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo],
            };
        case ACTIONS.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };
        case ACTIONS.UPDATE_TODO:
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, title: action.updatedTodo };
                }
                console.log(todo);
                return todo;
            });
            return {
                ...state,
                todos: updatedTodos
            }

        default:
            return state;
    }
};

function TodoList() {
    const [todoState, dispatch] = useReducer(todoListReducer, {
        todos: [
            { id: uuidv4(), title: "Learn React", completed: false },
            { id: uuidv4(), title: "Learn Node", completed: false },
        ],
    });

    const addItem = (todo) => {
        dispatch({ type: ACTIONS.ADD_TODO, todo });
    };

    const removeItem = (id) => {
        // setTodoList(todoList.filter((todo) => todo.id !== id));
        dispatch({ type: ACTIONS.REMOVE_TODO, id });
    };

    const updateItem = (id, updatedTodo) => {
        dispatch({type: ACTIONS.UPDATE_TODO, id, updatedTodo})
    };

    return (
        <div className="TodoList">
            <h1>Todo List</h1>
            <p className="subtitle">A simple todo list application</p>
            {todoState.todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        removeItem={removeItem}
                        updateItem={updateItem}
                    />
                );
            })}
            <NewTodoForm addItem={addItem} />
        </div>
    );
}

export default TodoList;
