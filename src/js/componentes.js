import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');
const txtImput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) =>{
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed': ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked': ''} >
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
    <input class="edit" value="Create a TodoMVC template">
    </li> `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    //div.firstElementChild = nos devuelve el primer hijo del elemento que estamos seleccionando en este caso el div y devolvera li
    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;
}

//Eventos:
//keyup = Soltar tecla
//evento = cual tecla fue la que presiono el usuario
txtImput.addEventListener('keyup', (evento) =>{
    if(evento.keyCode === 13 && txtImput.value.length > 0){
        const nuevoTodo = new Todo(txtImput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtImput.value = '';
    }
})