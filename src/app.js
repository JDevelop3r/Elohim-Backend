import express from "express";
import morgan from "morgan";
import cors from "cors";

import {
  createRoles,
  createEspecialidades,
  createFormasPago,
} from "./libs/initialSetup";

import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import pacientRoutes from "./routes/pacient.routes";
import doctorRoutes from "./routes/doctor.routes";
import consultRoutes from "./routes/consult.routes";

const app = express();
app.use(express.json());
app.use(cors());
createRoles();
createEspecialidades();
createFormasPago();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    author: "José Di Pietro",
    description: "Elohim backend",
    version: "0.01",
  });
});

app.use("/products", productsRoutes);
app.use("/auth", authRoutes);
app.use("/pacient", pacientRoutes);
app.use("/doctor", doctorRoutes);
app.use("/consult", consultRoutes);

export default app;
