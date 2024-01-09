import "./style.css"
import ToDoInputComponent from "./todo-input"
import ToDoListComponent from "./todo-list"
import React, { useState } from "react"

function App() {
  const [editingItem, setEditingItem] = useState(null)

  const [todoList, setTodoList] = useState([])
  const [glIndex, setGlIndex] = useState(0)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [filteredTodos, setFilteredTodos] = useState([])
  
  const todosToShow = isSearchActive ? filteredTodos : todoList;
  

  const updateItem = (index, newText) => {
    const updatedList = todoList.map((item, idx) => {
      if (idx === index) {
        return { ...item, text: newText }
      }
      return item
    })

    setTodoList(updatedList)
    setEditingItem(null)
  }

  const addTodoItem = (text) => {
    if (text.trim() === "") {
      return
    }
    const newItem = {
      text: text,
      createdAt: new Date(),
      index: glIndex,
    }
    setGlIndex(glIndex + 1)
    setTodoList([...todoList, newItem])
  }

  return (
    <div className="App">
      <ToDoInputComponent
        onAddItem={addTodoItem}
        editingItem={editingItem}
        onUpdateItem={updateItem}
        setFilteredTodos={setFilteredTodos}
        setIsSearchActive={setIsSearchActive}
        todoList={todoList}
      />

      <ToDoListComponent
        todoList={todosToShow}
        setTodoList={setTodoList}
        setEditingItem={setEditingItem}
      />
    </div>
  )
}

export default App
