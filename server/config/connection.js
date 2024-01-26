const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fundamentlolsDB",
  // Options for newer version of mongoose. These will remove warnings that would otherwise print out
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Export connection
module.exports = mongoose.connection;
