import { Request, Response } from "hyper-express"

export class BasicController {
    static async index (Request, Response) {
        Response.inertia("home")
    }

    static async about (Request, Response) {
        Response.inertia("about")
    }

    static async blog (Request, Response) {
        Response.inertia("blog")
    }

    static async categories (Request, Response) {
        Response.inertia("category")
    }

    static async profile (Request, Response) {
        Response.inertia("profile")
    }    
    
    static async user (Request, Response) {
        Response.inertia("user")
    }  
    
    static async notFound (Request, Response) {
        Response.inertia("NotFound")
    }

    static async tess (req: Request, res: Response) {
        res.status(200).json({
            data: "HI"
        })
    }

}
