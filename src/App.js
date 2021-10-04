import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends Component {
  state={
    items: [],
    id: uuidv4(),
    item: '',
    edititem: false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
    // console.log(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    // console.log('submitted')

    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      edititem: false
    }, () => {
      console.log(this.state)
    })
  }

  clearList = () => {
    console.log('Clear list')
  }

  handleEdit = id => {
    console.log(`handle edit ${this.state.id, id}`)
  }

  handleDelete = id => {
    console.log(`deleted item ${id}`)
  }


  render() {
    // console.log(this.state.id)

    // console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            {/* editItem={editItem} */}
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    )
  }
}
