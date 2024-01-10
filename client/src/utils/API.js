import axios from "axios";
require("dotenv").config();

const key = process.env.api_key;

const search = async (query) =>
  axios.get(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${query}/NA1?api_key=${key}`
  );

export default { search };
