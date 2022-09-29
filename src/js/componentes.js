import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');
const txtImput = document.querySelector('.new-todo');
const btnBorrarTodos= document.querySelector('.clear-completed');
const ulFltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

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
});

divTodoList.addEventListener('click', (evento)=>{
    //Saber que tipo de etiqueta es el que el usuario clickeo
    const nombreElement = evento.target.localName; //input= check, label= nombreTarea, button= la X 

    //El doble .parentElement fue porque queria obtener la etqueta li
    const todoElemento = evento.target.parentElement.parentElement;

    //Obtener el id de la variable anterior
    const todoId = todoElemento.getAttribute('data-id');
    
    if(nombreElement.includes('input')){ //click en el check
        todoList.marcarCompletado(todoId);

        //toggle() =Para agregar o cambiar una clase
        todoElemento.classList.toggle('completed');
    }else if(nombreElement.includes('button')){ //Borrar todo
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento); //Remover el elemento que cohincida con el li en HTML
    }
});

btnBorrarTodos.addEventListener('click', ()=>{
    todoList.eliminarCompletados();

    //Para poder eliminar todos los elementos se debe hacer de atras hacia adelante,
    //ya que si se hace de esta manera cada uno de los elementos no perderian su posicion
    for(let i = divTodoList.children.length-1; i>=0; i--){
        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});

ulFltros.addEventListener('click', (evento) =>{
    const filtro = evento.target.text;
    //*Si no existe filtro entonces hace un return
    if(!filtro){return;}

    anchorFiltros.forEach(element => element.classList.remove('selected'));
    evento.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
            break;
        
            default:
                break;
        }
    }
})