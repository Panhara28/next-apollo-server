import CreateKnexContext from "./CreateKnexContext";
import ExtractRequestToken from "./ExtractRequestToken";

export interface AuthUserInterface {
  id?: number;
  token?: string;
}

export function CreateApolloContext() {
  const knexConnectionList = CreateKnexContext();

  const context = async ({ req }: any): Promise<any> => {
    const token: string | undefined = ExtractRequestToken(req);

    try {
      return {
        knex: knexConnectionList,
        token,
      };
    } catch (error) {
      console.log(`Error`, error);
    }
  };

  return context;
}
