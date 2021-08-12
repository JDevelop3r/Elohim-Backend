import { Router } from "express";
const router = Router();

import * as doctorController from "../controllers/doctor.controller";
import { authJwt } from "../middlewares/index";

router.post("/", [authJwt.verifyToken], doctorController.createDoctor);

router.get("/", doctorController.getDoctors);

router.get("/:doctorCed", doctorController.getDoctorByCed);

router.put(
  "/:doctorCed",
  [authJwt.verifyToken, authJwt.isAdmin],
  doctorController.updateDoctorByCed
);

router.delete(
  "/:doctorId",
  [authJwt.verifyToken, authJwt.isAdmin],
  doctorController.deleteDoctorByCed
);

export default router;
