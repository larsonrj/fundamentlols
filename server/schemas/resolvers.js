import { Climb, User } from "../models/index.js";
import signToken from "../utils/auth.js";
import { AuthenticationError } from "apollo-server-express";

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
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }
      const correctPW = await user.isCorrectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError("Incorrect Password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

export default resolvers;
