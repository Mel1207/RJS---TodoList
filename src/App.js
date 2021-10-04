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
    editItem: false
  }

  // todo methods
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
      editItem: false
    }, () => {
      console.log(this.state)
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleEdit = id => {
    // console.log(`handle edit ${this.state.id, id}`)
    const filteredItems = this.state.items.filter(i => i.id !== id);
    const selectedItem = this.state.items.find(i => i.id === id);
    // console.log(selectedItem)
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  
  }

  handleDelete = id => {
    const filteredItems = this.state.items.filter(i => i.id !== id);
    this.setState({
      items: filteredItems
    })
  }


  render() {
    // console.log(this.state.id)
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
