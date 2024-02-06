import {Climb User } from "../models/index.js";

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
    
  }
};

export default resolvers;
