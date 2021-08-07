import Comision from "../models/Comisiones";

export const get = async (req, res) => {
  const comisiones = await Comision.find();
  console.log(comisiones);

  res.status(200).json({ comisiones });
};

export const update = async (req, res) => {
  const { nombre, valor } = req.body;

  if (!nombre || !valor) res.status(401).send("faltan datos");

  const comision = await Comision.findOneAndUpdate(
    { name: nombre },
    { valor },
    { new: true, useFindAndModify: false }
  );

  res.json({ comision });
};
