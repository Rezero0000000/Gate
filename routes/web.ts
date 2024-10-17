import hyperexpress from "hyper-express";
import { UserController } from "../app/controller/User-controller"
import { PostController } from "../app/controller/Post-controller";
import { CategoryController } from "../app/controller/Category-controller";
import {BasicController} from "../app/controller/Basic-controller"
const web = new hyperexpress.Router()

// sss
web.post("/tess", BasicController.tess);

// Interface
web.get("/", BasicController.index);
web.get("/about", BasicController.about);
web.get("/blog", BasicController.blog);
web.get("/profile", BasicController.profile);
web.get("/user", BasicController.user);
web.get("/404", BasicController.notFound);

// User
web.delete("/logout", UserController.logout);

web.get("/register",UserController.register);
web.post("/register",UserController.create);

web.get("/login", UserController.login)
web.post("/login",UserController.auth);

// Category
// web.get("/categories", BasicController.categories);
// web.get("/api/category/:categoryId", CategoryController.getCategory);
web.get("/category/create", CategoryController.create);
web.post("/category/create", CategoryController.insert);
web.put("/api/category/:categoryId", CategoryController.update)
web.delete("/api/category/:categoryId", CategoryController.remove);

// Post
web.get("/api/post/:id", PostController.get);
web.post("/api/post", PostController.create);
web.put("api/post/:postId", PostController.update);
web.delete("/api/post/:postId", PostController.remove);


export default web;