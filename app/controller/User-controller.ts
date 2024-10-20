import { CreateUser, LoginUser } from "../models/User-model";
import { UserServices } from "../services/User-service";

export class UserController {

   static async register (Request, Response) {
        Response.inertia("register")
   }

   static async create (Request, Response ) {
        const data: CreateUser = await Request.json() as CreateUser 
        await UserServices.register(data)
    }

    static async login (Request, Response) {
        Response.inertia("login")
    }

    static async auth (Request, response) {
        const data: LoginUser = await Request.json() as LoginUser
        await UserServices.login(data, response)
        console.log("berhasil")
    }

    static async logout (request, response) {
        await UserServices.logout (request, response);
    }

}