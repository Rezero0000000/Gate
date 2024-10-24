import { db } from "../database/db"
import { ContactService } from "../services/Contact-service";

export class ContactController {
    static async index (request, response) {
        const contacts = await db("contact").select("*");
        response.inertia("dashboard/contact", {
            contacts: contacts
        })
    }

    static async edit (request, response) {
        const id = request.params.id;
        const contact = await db("contact").where("id", id).first();
        response.inertia("dashboard/contact.edit", {contact: contact});
    }

    static async update (request, response) {
        const id = request.params.id;
        const req = await request.json()
        const result = await ContactService.updateContact(id, req);
        console.log(result)
    }

    static async delete (request, response) {
        const id = request.params.id;
        const result = await ContactService.deleteContact(id);
        console.log(result);
        response.redirect("/contact")
    }
}