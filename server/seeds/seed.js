import db from "../config/connection.js";

import Climb from "../models/Climb.js";

import climbData from "./climbData.json" assert { type: "json" };

db.once("open", async () => {
  // clean database
  await Climb.deleteMany({});

  await Climb.insertMany(climbData);
  console.log("all done!");
  process.exit(0);
});
