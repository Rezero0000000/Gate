import { CreateUser, LoginUser } from "../models/User-model";
import { UserServices } from "../services/User-service";

export class UserController {
    
   static async register (Request, Response) {
        if (Request.cookies.sessionId) {
            Response.redirect("/");
        }
        Response.inertia("auth/register")
   }

   static async create (Request, Response ) {
        if (Request.cookies.sessionId) {
            Response.redirect("/");
        }
        const data: CreateUser = await Request.json() as CreateUser 
        const response = await UserServices.register(data, Response)
        if (!response){
            Response.redirect("/login")
        }
        Response.redirect("/login")

    }

    static async login (Request, Response) {
        if (Request.cookies.sessionId) {
            Response.redirect("/");
        }

        Response.inertia("auth/login")
    }

    static async auth (Request, response) {
        if (Request.cookies.sessionId) {
            Response.redirect("/");
        }

        const data: LoginUser = await Request.json() as LoginUser
        await UserServices.login(data, response)
    }

    static async logout (request, response) {
        await UserServices.logout (request, response);
    }

}