import ContextType from "@/pages/api/context/ContextType";
import { GraphQLError } from "graphql";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export interface LoginParams {
  username: string;
  password: string;
}
export default async function LoginMutation(
  _: any,
  { username, password }: LoginParams,
  ctx: ContextType
) {
  const knex = await ctx.knex.default;

  const user: LoginParams = await knex
    .table("users")
    .where({ username })
    .first();

  if (!user) {
    throw new GraphQLError("Username doesn't existed!");
  }

  const confirmPassword = bcrypt.compareSync(password, user.password);

  if (!confirmPassword) {
    throw new GraphQLError("Incorrect Password");
  }

  const secret = process.env.SECRET_KEY || "";

  const token = sign({ username }, secret);

  return token;
}
