import { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    const password = await bcrypt.hash("123", 10)
    await knex("users").insert([
        { id: 0, name: "rei", username: "rei", email: "hikarisakata91@gmail.com",password:password}
    ]);
};
