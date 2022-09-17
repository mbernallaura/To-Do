// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import {Todo, TodoList} from './classes' //Busca el index.js, por defecto
import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender JS');

todoList.nuevoTodo(tarea);

console.log(todoList);
