import { error } from "console";
import { CreateUser, LoginUser } from "../models/User-model";
import { UserServices } from "../services/User-service";
import { UserRequest } from "../types/types";
import { Response } from "hyper-express";
import { Request } from "hyper-express";

export class UserController {

   static async register (Request, Response) {
        Response.inertia("register")
   }

   static async create (req: Request, res: Response ) {
        try {
            const data: CreateUser = await req.json() as CreateUser 
            const response = await UserServices.register(data)

            res.status(200).json({
                data: response
            });

        }catch (e) {
            res.status(400).json({
                error: e
            })
        }
    }


    static async login (Request, Response) {
        Response.inertia("login")
    }

    static async auth (req: Request, res: Response) {
        try {
            const data: LoginUser = await req.json() as LoginUser 
            const response = await UserServices.login(data, res)

            res.status(200).json({
                data: response
            });
        }
        catch(e) {
            res.status(400).json({
                error: e
            })
        }
    }

    static async logout (req: UserRequest, res: Response) {
        try {
            const response = await UserServices.logout (req);
            res.status(200).json({
                message: response
            })
        }
        catch (e) {
            res.status(400).json({
                error: e
            })
        }
    }

}