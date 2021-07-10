import { Router } from "express";
const router = Router();

import * as pacientController from "../controllers/pacient.controller";
import { authJwt } from "../middlewares/index";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  pacientController.createPacient
);

router.get("/", pacientController.getPacients);

router.get("/:pacientCed", pacientController.getPacientByCed);

router.put(
  "/:pacientCed",
  [authJwt.verifyToken, authJwt.isAdmin],
  pacientController.updatePacientByCed
);

router.delete(
  "/:pacientId",
  [authJwt.verifyToken, authJwt.isAdmin],
  pacientController.deletePacientByCed
);

export default router;
