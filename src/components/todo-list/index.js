import './style.css';
import ToDoItemComponent from './todo-item';





const ToDoListComponent = ({todoList, setTodoList,setEditingItem}) => {
  
  const handleDelete = (index) => {
    setTodoList(todoList.filter((_, idx) => idx !== index));
  };


  const startEditing = (item) => {
    setEditingItem(item);
  };

  

 return (
  <div className='todo-list'>

      {todoList.map((item, index) => (
        <ToDoItemComponent 
        key={index} 
        text={item.text} 
        createdAt={item.createdAt} 
        onDelete={() => handleDelete(index)}
        startEditing={() => startEditing(item)} />
      ))}
  </div>
 );
};

export default ToDoListComponent;