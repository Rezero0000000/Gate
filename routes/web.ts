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
web.post("/send", BasicController.sendMessage);
web.get("/send-media", BasicController.sendMedia);
web.post("/send-media", BasicController.sendMessageMedia);

export default web;
