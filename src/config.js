import { config } from "dotenv";
//Variables de entorno para la base de datos de MongoDB y el puerto a conectarse
config();
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/test";

export const PORT = process.env.PORT || 3000;
