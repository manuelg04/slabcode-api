import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService";
import { UserRepository } from "../repositories/UserRepository";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const user = await authService.validateToken(token);
    (req as any).user = { userId: user.id };
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};
