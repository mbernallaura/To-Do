

export class Todo{
    //*Desesctructuracion del objeto que se esta pasando en otro lado
    static fromJason({id, tarea, completado, creado}){
        const tempTodo = new Todo (tarea);
        tempTodo.id =id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); //Hora, minuto, segundos, de la hora actual
        this.completado = false;
        this.creado = new Date();
    }
}