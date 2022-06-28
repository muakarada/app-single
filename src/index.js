import app from "./app";
import "./database";
import { PORT } from "./config";

app.listen(PORT);
console.log("Servicio prendido", PORT);

//Trae a app y busca el puerto de node, conecta con DB
