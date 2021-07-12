import { Router } from "express";
const router = Router();

import * as consultController from "../controllers/consult.controller";
import { authJwt } from "../middlewares/index";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  consultController.createConsult
);

router.get("/", consultController.getConsults);

router.get("/:consultId", consultController.getConsultById);

router.get("/pacient/:pacientCed", consultController.getConsultsByPacientCed);

router.get("/doctor/:doctorCed", consultController.getConsultsByDoctorCed);

router.delete(
  "/:consultId",
  [authJwt.verifyToken, authJwt.isAdmin],
  consultController.deleteConsultById
);

/* router.put(
  "/:consultCed",
  [authJwt.verifyToken, authJwt.isAdmin],
  consultController.updateConsultByCed
);*/

export default router;
