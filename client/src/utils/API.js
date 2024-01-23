import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

const search = (query) =>
  axios
    .get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${query}?api_key=${key}`
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

export default search;
