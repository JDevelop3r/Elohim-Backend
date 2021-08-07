import { Router } from "express";
import * as comisionesController from "../controllers/comisiones.controller";
const router = Router();

router.get("/", comisionesController.get);
router.post("/", comisionesController.update);

export default router;
