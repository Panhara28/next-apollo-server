import LoginMutation from "./Authentication/Mutations/LoginMutation";
import RegisterMutation from "./Authentication/Mutations/RegisterMutation";
import TestQuery from "./Testing/queries/testing";

export const Resolver = [
  {
    Query: {
      testing: TestQuery,
    },
    Mutation: {
      register: RegisterMutation,
      userLogin: LoginMutation,
    },
  },
];
