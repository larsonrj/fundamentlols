import Climb from "../models/index.js";

const resolvers = {
  Query: {
    climbs: async () => {
      return await Climb.find({});
    },
  },
};

export default resolvers;
