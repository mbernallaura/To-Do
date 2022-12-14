import { Todo } from "./todo.class";

export class TodoList{
    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        id = id * 1; //* Esto para convertir el string a numero 
        for (const todo of this.todos){
            console.log(id, todo.id);
            if(todo.id === id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        //*.setItem(llave, valor)
        //* JSON.stringify()= Convertir el arreglo de todos a un Json 
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse (localStorage.getItem('todo')) 
                        : [];

        //*.map()= barrer cada uno de los elementos de un arreglo y retornar un nuevo arreglo con esos objetos mutados                   
        this.todos = this.todos.map(obj => Todo.fromJason(obj));
    }
}