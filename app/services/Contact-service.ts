import { db } from "../database/db"

export class ContactService {
    static async updateContact (id: number, request): Promise <string> {
        const result = await db("contact").where("id", id).update({
            name: request.name,
            phoneNumber: request.phoneNumber
        });

        console.log(result)
        if (result) {
            return "berhasil"
        }

        return "gagal";
    }
    
    static async deleteContact (id: number): Promise <string> {
        const result = await db("contact").where("id", id).delete();
        if (result) {
            return "berhasil"
        }

        return "gagal";
    }
}