import { gql, useQuery } from "@apollo/client";

const TESTING = gql`
  query testing {
    testing
  }
`;

export default function Home() {
  const { data, loading } = useQuery(TESTING);
  if (loading || !data) return <>Loading...</>;
  console.log(data);
  return <></>;
}
