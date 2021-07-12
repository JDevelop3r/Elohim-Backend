import Pacient from "../models/Pacient";

export const createPacient = async (req, res) => {
  try {
    const { firstName, lastName, ced, email, phone } = req.body;

    const pacient = new Pacient({ firstName, lastName, ced, email, phone });

    const saved = await pacient.save();
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Couldn't create patient" });
  }
};

export const getPacients = async (req, res) => {
  const pacients = await Pacient.find();
  res.json(pacients);
};

export const getPacientByCed = async (req, res) => {
  const pacient = await Pacient.findOne({ ced: req.params.pacientCed });

  res.status(200).json(pacient);
};

export const updatePacientByCed = async (req, res) => {
  const updatedPacient = await Pacient.findOneAndUpdate(
    { ced: req.params.pacientCed },
    req.body,
    { new: true }
  );

  res.status(204).json(updatedPacient);
};

export const deletePacientByCed = async (req, res) => {
  await Pacient.findOneAndDelete(req.params.pacientCed);
  res.status(204).json();
};
