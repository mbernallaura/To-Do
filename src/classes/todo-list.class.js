export class TodoList{
    constructor(){
        this.todos = [];
    }

    nuevoTodo(todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){
        
    }

    marcarCompletado(id){
        id = id * 1; // Esto para convertir el string a numero 
        for (const todo of this.todos){
            console.log(id, todo.id);
            if(todo.id === id){
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados(){

    }
}