import Role from "../models/Role";
import Especialidad, { ESPECIALIDADES } from "../models/Especialidad";
import FormaPago, { FORMA_PAGO } from "../models/FormaPago";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createEspecialidades = async () => {
  try {
    const count = await Especialidad.estimatedDocumentCount();

    if (count > 0) return;

    let promises = [];
    for (const especialidad of ESPECIALIDADES) {
      promises.push(new Especialidad({ name: especialidad }).save());
    }
    const values = await Promise.all(promises);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createFormasPago = async () => {
  try {
    const count = await FormaPago.estimatedDocumentCount();

    if (count > 0) return;

    let promises = [];
    for (const forma of FORMA_PAGO) {
      promises.push(
        new FormaPago({
          name: forma,
          moneda: forma.includes("$") ? "dolares" : "bolivares",
        }).save()
      );
    }
    const values = await Promise.all(promises);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
