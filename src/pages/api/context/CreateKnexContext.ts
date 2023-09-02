import knex from "knex";

export default function CreateKnexContext() {
  return {
    default: knex({
      client: "mysql2",
      connection: process.env.NEXT_PUBLIC_MYSQL_DEFAULT,
      pool: { min: 3, max: 10 },
    }),
  };
}
