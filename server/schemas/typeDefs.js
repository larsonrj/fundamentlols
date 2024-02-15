import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    climbs: [Climb]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Climb {
    _id: ID
    summonerName: String
  }

  type Query {
    users: [User]!
    user(userID: ID!): User
    climbs: [Climb]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

export default typeDefs;
