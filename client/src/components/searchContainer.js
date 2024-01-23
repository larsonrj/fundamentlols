import { useState, useEffect } from "react";
// Import our search method
import search from "../utils/API";

const SearchContainer = () => {
  const [user, setUser] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setUser(inputValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(user);
    setUser("");
  };

  return (
    <div>
      <p>Hello!</p>
      <form className="form">
        <input
          value={user}
          name="user"
          onChange={handleInputChange}
          type="username"
          placeholder="Enter Summoner Name"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchContainer;
