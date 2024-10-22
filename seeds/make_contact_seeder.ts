import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("contact").del();

    await knex("contact").insert([
        { id: 0, name: "rei",  phoneNumber: "6287741174222@s.whatsapp.net"},
        { id: 1, name: "Schwartz", phoneNumber: "6285189462658@s.whatsapp.net"}
    ]);
};
