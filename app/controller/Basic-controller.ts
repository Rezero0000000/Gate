import { db } from "../database/db"
import { Bailey} from "../services/Baileys"
const fs = require("fs")

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

    static async send (Request, Response) {

        const contacts = await db("contact").select("*");
        Response.inertia("dashboard/singleSend", {
            contacts: contacts
        })
    }

    static async sendMessage(request, response) {
        const req = await request.json();
        Bailey.sendMessage(req.target, req.message);
    }

    static async sendMedia (Request, Response) {
        const contacts = await db("contact").select("*");
        Response.inertia("dashboard/sendMedia", {
            contacts: contacts
        })
    }

    static async sendMessageMedia(request, response) {
        const req = await request.json();
        console.log(req)
        // Bailey.sendImage(req.target, fs.readFileSync(req.image), req.caption);
    }
}
