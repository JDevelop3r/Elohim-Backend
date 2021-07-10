import { Schema, model } from "mongoose";

const pacientSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    ced: { type: Number, unique: true },
    email: String,
    phone: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Pacient", pacientSchema);
