import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { makeExecutableSchema } from "@graphql-tools/schema";
import loadMergeSchema from "./functions/loadMergedSchema";
import { Resolver } from "./resolvers/Resolver";
import { CreateApolloContext } from "./context/CreateApolloContext";

const context = CreateApolloContext();

export const schema = makeExecutableSchema({
  typeDefs: loadMergeSchema,
  resolvers: Resolver,
});

const server = new ApolloServer({
  schema,
  introspection: true,
  csrfPrevention: false, // true in production
});

export default startServerAndCreateNextHandler(server, {
  context,
});
