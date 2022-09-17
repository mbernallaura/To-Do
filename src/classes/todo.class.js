

export class Todo{
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); //Hora, minuto, segundos, de la hora actual
        this.completado = false;
        this.creado = new Date();
    }
}