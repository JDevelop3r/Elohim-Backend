import Consult from "../models/Consult";
import Doctor from "../models/Doctor";
import Especialidad from "../models/Especialidad";
import FormaPago from "../models/FormaPago";
import Pacient from "../models/Pacient";

export const createConsult = async (req, res) => {
  const { doctor, pacient, area, date, trabajo, observaciones, pago } =
    req.body;

  const docObj = await Doctor.findById(doctor);
  const pacObj = await Pacient.findById(pacient);
  const especialidad = await Especialidad.findOne({ name: area });

  let pagos = [];
  for (const el of pago) {
    const formaPago = await FormaPago.findOne({ name: el.formaPago });
    pagos.push({ monto: el.monto, formaPago: formaPago._id });
  }

  const consult = new Consult({
    doctor: docObj._id,
    pacient: pacObj._id,
    area: especialidad._id,
    date: new Date(),
    trabajo,
    observaciones,
    pago: pagos,
  });

  const saved = await consult.save();
  res.status(201).json(saved);
};

export const getConsults = async (req, res) => {
  const consults = await Consult.find()
    .populate("doctor")
    .populate("pacient")
    .populate({
      path: "pago",
      populate: {
        path: "formaPago",
        model: "FormaPago",
      },
    })
    .populate("area");
  console.log(consults);
  res.json(consults);
};

export const getConsultById = async (req, res) => {
  const consult = await Consult.findById(req.params.consultId)
    .populate("doctor")
    .populate("pacient")
    .populate({
      path: "pago",
      populate: {
        path: "formaPago",
        model: "FormaPago",
      },
    })
    .populate("area");
  console.log(consult);
  res.status(200).json(consult);
};

export const getConsultsByPacientCed = async (req, res) => {
  const pacient = await Pacient.findOne({ ced: req.params.pacientCed });

  const consults = await Consult.find({ pacient: pacient._id })
    .populate("doctor")
    .populate("pacient")
    .populate({
      path: "pago",
      populate: {
        path: "formaPago",
        model: "FormaPago",
      },
    })
    .populate("area");

  res.status(201).json(consults);
};

export const updateConsultById = async (req, res) => {
  const updatedConsult = await Consult.findByIdAndUpdate(
    req.params.consultId,
    req.body,
    { new: true }
  );

  res.status(204).json(updatedConsult);
};

export const deleteConsultById = async (req, res) => {
  await Consult.findByIdAndDelete(req.params.consultId);
  res.status(204).json();
};
