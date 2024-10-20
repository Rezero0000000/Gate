import hyperexpress from "hyper-express";
import { UserController } from "../app/controller/User-controller"
import {BasicController} from "../app/controller/Basic-controller"
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
web.post("/login",UserController.auth);

// dashboard
web.get("/dashboard", BasicController.dashboard);

export default web;