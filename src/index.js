// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import {Todo, TodoList} from './classes' //Busca el index.js, por defecto
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHtml(todo));
//* Para hacer lo anterior de una manera mas corta, solo funcionara si solo se tiene un argumento
// todoList.todos.forEach(crearTodoHtml)

//!LocalStorage = Persiste la informacion en el navegador 
//?hay un localStorage por dominio(url)
//!SessionStorage= La informacion es volatil y al cerrar el navegador, se va la info
//localStorage.setItem('mi-key', 'ACB123');