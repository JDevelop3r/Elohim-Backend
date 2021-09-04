import { Router } from "express";
import * as notasController from "../controllers/notas.controller";
const router = Router();

router.get("/", notasController.get);
router.post("/", notasController.update);
router.delete("/", notasController.deleteNote);

export default router;
