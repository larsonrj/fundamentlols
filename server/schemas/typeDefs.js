import { gql } from "apollo-server-express";

const typeDefs = gql`
type User {
  _id: ID
  email: String
  password: String
}
  type Climb {
    _id: ID
    summonerName: String
  }

  type Query {
    climbs: [Climb]
  }
  type 
`;

export default typeDefs;
