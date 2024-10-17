import { Request } from "hyper-express";
import { User } from "../models/User-model";

export interface UserRequest extends Request {
    user? : User
}