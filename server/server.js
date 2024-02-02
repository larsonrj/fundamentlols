// Require express from package.json
import express from "express";

// Import axios for fetch
import axios from "axios";

// Import apollo server class
import { ApolloServer } from "apollo-server-express";

// Require GraphQL schema and database (mongoDB)
import { typeDefs, resolvers } from "./schemas/index.js";
import db from "./config/connection.js";

// Setup express server
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

// Get request
// import "dotenv/config";
// const key = process.env.API_KEY;

// const search = (query) =>
//   axios
//     .get(
//       `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${query}/NA1?api_key=${key}`
//     )
//     .then((res) => {
//       return res.data.puuid;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// app.post("/summonerID", async (req, res) => {
//   const { name } = req.body;
//   const summoner = await search(name);
//   res.status(201).json(summoner);
// });

// app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
