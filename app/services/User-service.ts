import { Response } from "hyper-express";
import { db } from "../database/db";
import { CreateUser, LoginUser, ToUserResponse, User } from "../models/User-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid";


export class UserServices {
   static async register (req: CreateUser): Promise<User> {
       const validatedRequest = await Validation.validate(UserValidation.CREATE, req);
       validatedRequest.password = await bcrypt.hash(validatedRequest.password, 10);

       const isUsernameUsed = await db("users").where("username", validatedRequest.username).first()
       const isEmailUsed = await db("users").where("email", validatedRequest.email).first();

       if (isEmailUsed) {
        console.log("email kepake")
       }
       if (isUsernameUsed) {
        console.log("username kepakes")
       }

       const dataId = await db("users").insert({
            name: validatedRequest.name,
            username: validatedRequest.username,
            email: validatedRequest.email,
            password: validatedRequest.password
       });
       const user = await db('users').where("id", dataId[0]).first();
       return ToUserResponse(user)
   } 




   static async login (req: LoginUser, res){
        const validatedRequest = await Validation.validate(UserValidation.LOGIN, req);
        console.log(validatedRequest.email)

        const isEmailMatch = await db("users").where("email", req.email).first();
        console.log(isEmailMatch)
        
        if (!isEmailMatch) {
            console.log("email g match")
        }
         console.log(validatedRequest)
        const isPasswordMatch = await bcrypt.compare(validatedRequest.password, isEmailMatch.password);

        if (!isPasswordMatch) {
            console.log('hhh')
        }

          // Generate session token
          const sessionId = uuid();

          // Save session to database
          await db.from("sessions").insert({
             sessionId: sessionId,
             userId: isEmailMatch.id,
          });
 
          // Set session token in cookie
          res.cookie('sessionId', sessionId, {
             httpOnly: true,
             maxAge: 3600000 // 1 hour
          });
          
          res.redirect("/register")
          console.log("berhasil")
   }

   static async logout (request, response) {
    const sessionId = request.cookies.sessionId;
        console.log('hi')
        if (sessionId) {
        await db.from("sessions").where("sessionId", sessionId).delete();

        response.clearCookie("sessionId");
        }

        response.redirect("/login");
    }
}