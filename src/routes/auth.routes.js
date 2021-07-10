import { Router } from "express";
import * as authController from "../controllers/auth.controller";
const router = Router();

import { verifySignup } from "../middlewares";

router.post("/signin", authController.signIn);
router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authController.signUp
);

export default router;
