import { Request, Response } from "hyper-express"

export class BasicController {
    static async index (Request, Response) {
        Response.inertia("home")
    }

    static async blog (Request, Response) {
        Response.inertia("blog")
    }
    
    static async notFound (Request, Response) {
        Response.inertia("NotFound")
    }

    static async dashboard (Request, Response) {
        Response.inertia("dashboard/dashboard")
    }

}
