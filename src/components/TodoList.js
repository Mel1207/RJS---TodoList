import React, { Component } from 'react'
import TodoItem from './TodoItem'
// test push vscode
export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props

        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">Todo List</h3>
                    {items.map(i => {return (<TodoItem key={i.id} title={i.title} handleDelete={() => handleDelete(i.id)} handleEdit={() => handleEdit(i.id)}></TodoItem>)})}
                </ul>
                <button type="button" className="btn btn-danger col-12 text-white mt-5" onClick={clearList}>Clear List</button>
            </div>
        )
    }
}
