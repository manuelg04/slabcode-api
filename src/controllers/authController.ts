import { Request, Response } from "express";
import { IAuthService } from "../interfaces/IAuthService";

export class AuthController {
  constructor(private authService: IAuthService) {}

  login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    try {
      const token = await this.authService.login(username, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: "Invalid credentials" });
    }
  };
}
