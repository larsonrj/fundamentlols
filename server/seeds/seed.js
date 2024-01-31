import db from "../config/connection.js";

import Climb from "../models/Climb.js";

// Use create require to load JSON files using the CommonJS approach
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const climbData = require("./climbData.json");

db.once("open", async () => {
  // clean database
  await Climb.deleteMany({});

  await Climb.insertMany(climbData);
  console.log("all done!");
  process.exit(0);
});
