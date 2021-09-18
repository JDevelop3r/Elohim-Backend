import { Schema, model } from "mongoose";

export const COMISIONES = [
  "platco",
  "pago_movil",
  "transferencia",
  "desechos_biologicos",
  "gastos_administrativos",
  "decreto_islr",
  "unidad_tributaria",
  "mantenimiento_punto",
];

const comisionSchema = new Schema(
  {
    name: String,
    valor: Number,
  },
  {
    versionKey: false,
  }
);

export default model("Comision", comisionSchema);
