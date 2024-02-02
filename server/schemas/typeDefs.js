import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Climb {
    _id: ID
    summonerName: String
  }

  type Query {
    climbs: [Climb]
  }
`;

export default typeDefs;
