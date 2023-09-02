import ContextType from "@/pages/api/context/ContextType";
import { LoginParams } from "./LoginMutation";
import bcrypt from "bcrypt";

export default async function RegisterMutation(
  _: any,
  { username, password }: LoginParams,
  ctx: ContextType
) {
  const knex = await ctx.knex.default;

  const hashPassword = bcrypt.hashSync(password, 12);

  const [register] = await knex
    .table("users")
    .insert({ username, password: hashPassword });

  if (register > 0) {
    return true;
  } else {
    return false;
  }
}
