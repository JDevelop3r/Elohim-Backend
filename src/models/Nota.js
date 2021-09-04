import { Schema, model } from "mongoose";

const notaSchema = new Schema(
  {
    fecha: Date,
    contenido: String,
  },
  {
    versionKey: false,
  }
);

export default model("Nota", notaSchema);
