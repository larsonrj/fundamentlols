import { Schema, model } from "mongoose";

const climbSchema = new Schema({
  summonerName: String,
});

const Climb = model("Climb", climbSchema);

export default Climb;
