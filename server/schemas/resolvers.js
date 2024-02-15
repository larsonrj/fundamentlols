import { Climb, User } from "../models/index.js";

const resolvers = {
  Query: {
    climbs: async () => {
      return await Climb.find({});
    },
    user: async () => {
      return User.findOne({ email: email });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const profile = await User.create({ username, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
  },
};

export default resolvers;
