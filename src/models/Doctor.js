import { Schema, model } from "mongoose";

const doctorSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    ced: { type: Number, unique: true },
    domicilioFiscal: String,
    email: String,
    rif: String,
    phone: Number,
    especialidades: [
      {
        ref: "Especialidad",
        type: Schema.Types.ObjectId,
      },
    ],
    ganancia: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Doctor", doctorSchema);
