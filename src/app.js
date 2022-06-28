import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

//Configuración de handlebars
app.set("views", path.join(__dirname, "views"));

const hbs = create({
  extname: ".hbs",
  layoutsDir: path.join("src/views", "layouts"),
  partialsDir: path.join("src/views", "partials"),
  defaultLayout: "main",
});
app.engine(".hbs", hbs.engine);

app.set("view engine", ".hbs");

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Conexión a rutas
app.use(indexRoutes);

export default app;
