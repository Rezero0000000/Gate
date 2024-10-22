import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('contact', table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("phoneNumber").notNullable();
        table.string("group").nullable();
        table.timestamps(false, true);
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('contact');
}

