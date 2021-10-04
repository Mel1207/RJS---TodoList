import React, { Component } from 'react'
import { BsFillBookFill } from 'react-icons/bs'

export default class TodoInput extends Component {
    render() {

        // console.log(this.props)
        const {item, handleChange, handleSubmit, editItem} = this.props

        return (
            <div className="card card-body mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i>
                                    <BsFillBookFill/>
                                </i>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="add to do" value={item} onChange={handleChange}/>
                    </div>
                    <button type="submit" 
                        className={ editItem ? "btn col-12 btn-warning mt-3" : "btn col-12 btn-primary mt-3"}
                        disabled={item ? false : true}
                        >
                        {editItem ? "edit item": "add item"}
                    </button>
                </form>
                
            </div>
        )
    }
}
