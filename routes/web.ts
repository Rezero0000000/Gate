import hyperexpress from "hyper-express";
import { UserController } from "../app/controller/User-controller"
import {BasicController} from "../app/controller/Basic-controller"
import { ContactController } from "../app/controller/Contact-controller";
const web = new hyperexpress.Router()


// Interface
web.get("/", BasicController.index);
web.get("/blog", BasicController.blog);
web.get("/404", BasicController.notFound);

// User
web.post("/logout", UserController.logout);

web.get("/register",UserController.register);
web.post("/register",UserController.create);

web.get("/login", UserController.login)
web.post("/login", UserController.auth);

// Contact
web.get("/contact", ContactController.index);
web.get("/contact/edit/:id", ContactController.edit);
web.post("/contact/del/:id", ContactController.delete);
web.post("/contact/edit/:id", ContactController.update);

// dashboard
web.get("/dashboard", BasicController.dashboard);
web.get("/send", BasicController.send);

export default web;











// import { connectToWhatsApp, getQRCode, getSocket } from "../app/services/Baileys";
// import qrcode from "qrcode-terminal";
// import qrImage from 'qr-image';


// connectToWhatsApp();
// const sock = getSocket();

// web.get("/qr", async (req, res) => {
//     const qr = getQRCode(); // Ambil QR code yang tersimpan
//     if (qr) {
//       try {
//         const qrSvg = qrImage.image(qr, { type: 'svg' });
//         res.setHeader('Content-Type', 'image/svg+xml');
//         qrSvg.pipe(res);
//       } catch (error) {
//         console.error("Error generating QR image:", error);
//         res.status(500).send("Failed to generate QR code image.");
//       }
//     } else {
//       res.send("QR Code tidak tersedia saat ini.");
//     }
//   });

//   web.post("/send", async (req, res) => {
//     try {
//        if (!sock) {
//           return res.status(500).send("Socket belum terhubung ke WhatsApp.");
//        }
 
//        const message = await req.json();
//       //  console.log(await sock.sendMessage("6287741174222@s.whatsapp.net", { text: "ssad" }));
//        res.send("Pesan terkirim.");
//     } catch (error) {
//        console.error("Error mengirim pesan:", error);
//        res.status(500).send("Gagal mengirim pesan.");
//     }
//  });
 