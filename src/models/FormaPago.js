import { Schema, model } from "mongoose";

export const FORMA_PAGO = [
  "efectivo$",
  "debito",
  "zelle$",
  "transferencia",
  "pago_movil",
  "efectivoBss",
  "credito",
  "otro",
];
export const TIPO_PAGO = ["dolares", "bolivares"];

const formaPagoSchema = new Schema(
  {
    name: String,
    moneda: String,
  },
  {
    versionKey: false,
  }
);

export default model("FormaPago", formaPagoSchema);
