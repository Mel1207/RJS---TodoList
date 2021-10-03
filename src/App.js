import React, { Component } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hey from react</h1>
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}
