import { MiddlewareNext } from "hyper-express";
import { UserRequest } from "../types/types";
import { db } from "../database/db";

export const authMiddleware = async (request , response, next: MiddlewareNext) => {
   if (request.cookies.sessionId) {
      const session = await db.from("sessions")
         .where("sessionId", request.cookies.sessionId)
         .first();

      if (session) {
         const user = await db.from("users")
            .where("id", 0) 
            .first();

         request.user = user;

         request.share = {
            user: request.user,
         };
        
         return next();
      }
   } else {
    response.redirect("/login")
   }
}

