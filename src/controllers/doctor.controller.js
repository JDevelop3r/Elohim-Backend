import Doctor from "../models/Doctor";
import Especialidad from "../models/Especialidad";

export const createDoctor = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      ced,
      email,
      phone,
      especialidades,
      ganancia,
      rif,
      domicilioFiscal,
    } = req.body;

    const doctor = new Doctor({
      firstName,
      lastName,
      ced,
      rif,
      email,
      phone,
      ganancia,
      domicilioFiscal,
    });

    if (especialidades) {
      const foundEspecialidades = await Especialidad.find({
        name: { $in: especialidades },
      });
      doctor.especialidades = foundEspecialidades.map(
        (especialidad) => especialidad._id
      );
    } else {
      doctor.especialidades = [];
    }

    const saved = await doctor.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: "No se pudo crear el Doctor", error });
  }
};

export const getDoctors = async (req, res) => {
  const doctors = await Doctor.find().populate("especialidades");
  res.json(doctors);
};

export const getDoctorByCed = async (req, res) => {
  const doctor = await Doctor.findOne({ ced: req.params.doctorCed }).populate(
    "especialidades"
  );

  res.status(200).json(doctor);
};

export const updateDoctorByCed = async (req, res) => {
  const updatedDoctor = await Doctor.findOneAndUpdate(
    { ced: req.params.doctorCed },
    req.body,
    { new: true }
  );

  res.status(204).json(updatedDoctor);
};

export const deleteDoctorByCed = async (req, res) => {
  await Doctor.findOneAndDelete(req.params.doctorCed);
  res.status(204).json();
};
