import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends Component {
  state={
    items: [{id: 1, title: 'Code now'}, {id: 2, title: 'Code later'}],
    id: uuidv4(),
    item: '',
    edititem: false
  }

  handleChange = e => {
    console.log('typed change')
  }

  handleSubmit = e => {
    console.log('submitted')
  }

  clearList = () => {
    console.log('Clear list')
  }

  handleEdit = e => {
    console.log(`handle edit ${id}`)
  }

  handleDelete = e => {
    console.log(`deleted item ${id}`)
  }


  render() {
    // console.log(this.state.id)

    return (
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    )
  }
}
