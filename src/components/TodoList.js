import React, { Component } from 'react'
import TodoItem from './TodoItem'
// test push vscode
export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <TodoItem />
            </div>
        )
    }
}
