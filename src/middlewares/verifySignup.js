import { ROLES } from "../models/Role";
import User from "../models/User";

export const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (const role of req.body.roles) {
      if (!ROLES.includes(role)) {
        return res
          .status(400)
          .json({ message: `Role ${role} does not exist.` });
      }
    }
  }
  next();
};

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).json({ message: "User Already exists" });

  const email = await User.findOne({ email: req.body.email });
  if (email) return res.status(400).json({ message: "User Already exists" });

  next();
};
