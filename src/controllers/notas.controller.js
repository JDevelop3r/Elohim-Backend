import Nota from "../models/Notaes";

export const get = async (req, res) => {
  const notas = await Nota.find();
  console.log(notas);

  res.status(200).json({ notas });
};

export const update = async (req, res) => {
  const { contenido } = req.body;

  if (!contenido) res.status(401).send("faltan datos");

  const nota = new Nota({ contenido });
  const saved = await nota.save();
  res.json({ saved });
};

export const deleteNote = async (req, res) => {
  const { id } = req.body;

  if (!id) res.status(400).send();

  const notaDeleted = new Nota.findByIdAndDelete(id);

  res.json({ notaDeleted });
};
