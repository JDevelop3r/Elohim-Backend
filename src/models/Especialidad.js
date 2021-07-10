import { Schema, model } from "mongoose";

export const ESPECIALIDADES = [
  "odontologia_general",
  "pediatra",
  "medicina_general",
  "medicina_familiar",
  "ecografia",
  "maternidad",
  "cardiologia",
  "ortodoncia",
  "cirugia_bucal",
  "implantes",
  "cirugia_maxilofacial",
];

const especialidadSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Especialidad", especialidadSchema);
