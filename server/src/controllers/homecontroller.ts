import { Request, Response } from "express";

export default class HomeController {
  ping = async (req: Request, res: Response): Promise<Response> =>
    res.status(200).json({ message: "pong" });
}