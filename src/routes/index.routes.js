import { Router } from "express";
import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleDoneTask,
} from "../controllers/task.controller";

const rutas = Router();

//Ruta index de la página
rutas.get("/", renderTask);
//Ruta guardar tareas
rutas.post("/tasks/add", createTask);
//Obtener id del objeto de mongo para actualizar la tarea
rutas.get("/edit/:id", renderTaskEdit);
//Enviar a editar la tarea, actualizar y volver al inicio
rutas.post("/edit/:id", editTask);
//Eliminar tarea y volver al incicio
rutas.get("/delete/:id", deleteTask);
//Verificar tarea hecha y volver al inicio
rutas.get("/toggleDone/:id", toggleDoneTask);
export default rutas;
