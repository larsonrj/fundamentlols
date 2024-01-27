// Require express from package.json
import express from "express";

// Import axios for fetch
import axios from "axios";

// Import apollo server class
import { ApolloServer } from "apollo-server-express";

// Require GraphQL schema and database (mongoDB)
// import { typeDefs, resolvers } from "./schemas";
import db from "./config/connection.js";

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// Setup express server
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const PORT = process.env.PORT || 3001;

// Get request
import "dotenv/config";
const key = process.env.API_KEY;

const search = (query) =>
  axios
    .get(
      `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${query}/NA1?api_key=${key}`
    )
    .then((res) => {
      return res.data.puuid;
    })
    .catch((err) => {
      console.log(err);
    });
app.post("/summonerID", async (req, res) => {
  const { name } = req.body;
  const summoner = await search(name);
  res.status(201).json(summoner);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
