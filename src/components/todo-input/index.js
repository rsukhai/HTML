import "./style.css"
import React, { useState, useEffect } from "react"

const ToDoInputComponent = ({ onAddItem, onUpdateItem, editingItem, todoList, setFilteredTodos, setIsSearchActive }) => {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (editingItem) {
      setInputText(editingItem.text);
    }
  }, [editingItem]);

  const handleSubmit = () => {
    if (editingItem) {
      onUpdateItem(editingItem.index, inputText);
    } else if (inputText.trim() !== '') {
      onAddItem(inputText);
    }
    setInputText("");
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const performSearch = () => {


    if (searchText.trim() === '') {
      setFilteredTodos([]);
      setIsSearchActive(false);
    } else if (todoList && Array.isArray(todoList)) {
      const filtered = todoList.filter((todo) =>
        todo.text.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredTodos(filtered);
      setIsSearchActive(true);
    }
  };

  const clearSearch = () => {
    setSearchText('');
    setFilteredTodos([]);
    setIsSearchActive(false);
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add item..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit" className="add" onClick={handleSubmit}>
        {editingItem ? "Update" : "Add"}
      </button>

      <div id="search">
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={handleSearchChange}
        />
        <span onClick={clearSearch}>X</span>
      </div>

      <button type="button" onClick={() => performSearch(searchText)}>
        Search
      </button>
    </div>
  );
}

export default ToDoInputComponent;
