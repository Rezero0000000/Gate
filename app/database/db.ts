import knex from "knex";

const database = knex({
  client: "better-sqlite3",
  connection: {
    filename: "./app/database/dev.sqlite3"
  },
  useNullAsDefault : true
  });

export {database as db};