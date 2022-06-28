import Task from "../models/Task";

//Carga y muestra la lista de tareas desde BD
export const renderTask = async (req, res) => {
  const tasksList = await Task.find().lean();
  res.render("index", { tasks: tasksList });
};
//Crea una tarea y la envia a la BD
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
//Obtiene el ID de BD de una tarea 
export const renderTaskEdit = async (req, res) => {
  try {
    const taskEdit = await Task.findById(req.params.id).lean();
    res.render("edit", { task: taskEdit });
  } catch (error) {
    console.log(error.message);
  }
};
//Editar tarea y la envía a la BD
export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};
//Eliminar una tarea de la BD
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};
//Actualizar estado de tarea (Hecha, sin hacer)
export const toggleDoneTask = async (req, res) => {
  const { id } = req.params;
  const taskDone = await Task.findById(id);
  taskDone.done = !taskDone.done;
  await taskDone.save();
  res.redirect("/");
};
