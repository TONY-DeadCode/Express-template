import { Request, Response } from 'express';
import { register, login } from '../services/authService';
import ms from 'ms';

const registerController = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    await register(req.body.username, req.body.password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

const loginController = async (req: Request, res: Response) => {
  try {
    const token = await login(req.body.username, req.body.password);
    res.cookie('Authorization', token, { maxAge: Date.now() + ms("1h") })
    res.json({ message: "Login successfully" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export { registerController, loginController };
