import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './style.css';

/**
 * 
 * @param {Object} props 
 * @param {string} props.text
 * @param {Date} props.createdAt
 * @returns 
 */
const ToDoItemComponent = (props) => {

 const text = props.text || "Text of todo item";
 const date = (props.createdAt || new Date()).toDateString();

 return (
  <div className='todo-item'>
   <div>
    <input class="form-check-input" type="checkbox" value="option1" />
    <label class="form-check-label" for="inlineCheckbox1"></label>
    <span class="todo-text">{text}</span>
   </div>
   <span class="todo-text">{date}</span>
   <span class="span-button">
    <FontAwesomeIcon icon={faTrash} onClick={props.onDelete}/>
   </span>
   <span class="span-button">
    <FontAwesomeIcon icon={faPen} onClick={() => props.startEditing(props)} />
   </span>
  </div>
  
  
 );
};

export default ToDoItemComponent;