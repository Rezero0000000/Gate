import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('sessions', table => {
        table.increments("id").primary();
        table.string("sessionId").notNullable();
        table.integer("userId").notNullable();
        table.timestamps(false, true);
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('sessions');
}

