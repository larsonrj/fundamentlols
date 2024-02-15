import jwt from "jsonwebtoken";

const secret = "hasakey";
const expiration = "2h";

const signToken = function ({ email, name, _id }) {
  const payload = { email, name, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

export default signToken;
