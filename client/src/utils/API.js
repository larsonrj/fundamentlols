import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

const search = (query) =>
  axios
    .get(
      `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${query}/NA1?api_key=${key}`
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

export default search;
