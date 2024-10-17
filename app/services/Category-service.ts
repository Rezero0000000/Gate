import { db } from "../database/db";
import { Category, CreateCategoryRequest, toCategoryResponse, UpdateCategoryRequest } from "../models/Category-model";
import { CategoryValidation } from "../validation/category-validation";
import { Validation } from "../validation/validation";

export class CategoryService {
    static async create (req: CreateCategoryRequest): Promise<Category> {

        console.log(req)
        const validatedRequest = await Validation.validate(CategoryValidation.CREATE, req);

        console.log(validatedRequest)
        const isSlugUsed = await db("categories").where("slug", validatedRequest.slug).first();

        if (isSlugUsed){
            console.log("slug sudah digunakan")
        }

        const dataId = await db("categories").insert({
            title: validatedRequest.title,
            slug: validatedRequest.slug
        });

        const category = await db("categories").where("id", dataId[0]).first();
        return toCategoryResponse(category)
    }

    static async remove (id: number): Promise<string> {
        const status = await db("categories").where("id", id).del();
        if (!status) {
            console.log("gagal euy")
        }

        return "Berhasil euy"
    }

    static async getCategory (id: number): Promise<Category> {
        const category = await db("categories").where("id", id).first();
        if (!category) {
            console.log("Gada cuy")
        }
        return toCategoryResponse(category);
    }

    static async update (req: UpdateCategoryRequest, id: number): Promise<Category> {
        const validatedRequest = await Validation.validate(CategoryValidation.UPDATE, req);
        
        const status = await db("categories").where("id", id).update({
            title: validatedRequest.title,
            slug: validatedRequest.slug
        });
        if (!status) {
            console.log("Gagal euy")
        }

        const currentCategory = await db("categories").where("id", id).first();
        return toCategoryResponse(currentCategory);
    }
}