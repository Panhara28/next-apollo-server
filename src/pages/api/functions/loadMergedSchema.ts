import { gql } from "graphql-tag";
import * as fs from "fs";

export default function loadMergeSchema() {
  const schema = [];
  const files = fs.readdirSync("./src/pages/api/schema/").sort();

  for (const file of files) {
    schema.push(
      gql`
        ${fs.readFileSync("./src/pages/api/schema/" + file)}
      `
    );
  }

  return [...schema];
}
