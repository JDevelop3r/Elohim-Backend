import { Schema, model } from "mongoose";

const consultSchema = new Schema(
  {
    pacient: {
      ref: "Pacient",
      type: Schema.Types.ObjectId,
    },
    doctor: {
      ref: "Doctor",
      type: Schema.Types.ObjectId,
    },
    area: {
      ref: "Especialidad",
      type: Schema.Types.ObjectId,
    },
    date: Date,
    trabajo: String,
    observaciones: String,
    pago: [
      {
        formaPago: {
          ref: "FormaPago",
          type: Schema.Types.ObjectId,
        },
        monto: Number,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Consult", consultSchema);
