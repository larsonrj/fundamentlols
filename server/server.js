// Require express from package.json
// Common JS
// const express = require("express");
// ES6
import express from "express";

// Import apollo server class
const { ApolloServer } = require("apollo-server-express");

// Require GraphQL schema and database (mongoDB)
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const app = express();
app.listen(3000, () => console.log("Example app listening on port 3000!"));
