import React, { Component } from 'react'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'

export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props

        return (
            <li className="list-group-item text-capitalize my-2 d-flex justify-content-between justify-center">
                <h6 className="mx-0 my-0">{title}</h6>
                <div className="todo-icon">
                    <span className="mx-3 text-success" onClick={handleEdit}>
                        <BsFillPencilFill />
                    </span>
                    <span className="text-danger" onClick={handleDelete}>
                        <BsFillTrashFill />
                    </span>
                </div>
            
            </li>
        )
    }
}
