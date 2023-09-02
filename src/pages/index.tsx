import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";

const LOGIN_MUTATION = gql`
  mutation userLogin($username: String!, $password: String!) {
    userLogin(username: $username, password: $password)
  }
`;

export default function Home() {
  const [userLogin] = useMutation(LOGIN_MUTATION);

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      currentTarget: { username, password },
    } = e;

    userLogin({
      variables: {
        username: username.value,
        password: password.value,
      },
      onCompleted: (data) => {},
    });
  };
  return (
    <>
      <form onSubmit={onLogin}>
        <input type="text" placeholder="Username" name="username" />
        <br />
        <input type="text" placeholder="Password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
