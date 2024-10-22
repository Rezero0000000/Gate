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

    static async contact (Request, Response) {
        Response.inertia("dashboard/contact")
    }

    static async send (Request, Response) {
        Response.inertia("dashboard/singleSend")
    }

}
