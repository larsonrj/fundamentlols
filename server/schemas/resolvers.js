import { Climb, User } from "../models/index.js";
import signToken from "../utils/auth.js";

const resolvers = {
  Query: {
    climbs: async () => {
      return await Climb.find({});
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { userID }) => {
      return User.findOne({ _id: userID });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
  },
};

export default resolvers;
