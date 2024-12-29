import { db } from "../database/db"
import { Bailey} from "../services/Baileys"
const multer = require('multer');
const fs = require('fs');

// Mutler Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPG, JPEG, and PNG are allowed.'));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});



// Controller


export class BasicController {
    static async notFound (Request, Response) {
        Response.inertia("NotFound")
    }
    
    static async index (Request, Response) {
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

    static sendMessageMedia = [
        upload.single('image'),
        async (request, response) => {
            try {
                const { target, caption } = request.body; 
                const image = request.file; 
    
                if (!image) {
                    return response.status(400).json({ error: "File is required" });
                }
                console.log("Uploaded File:", request.file);
                console.log("MIME Type:", request.file.mimetype);
                console.log("Target:", target);
                console.log("Caption:", caption);
                console.log("Image:", image);
    
                Bailey.sendImage(
                    target,
                    fs.readFileSync(image.path),
                    caption
                );
                fs.unlinkSync(image.path);
            } catch (error) {
                console.error("Error processing media:", error);
            }
        }
    ];
}
