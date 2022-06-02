const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://Niku800:8800@cluster0.jkiaa.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected...  ${conn.connection.host}  `);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold);
    process.exit(); // process.exit() is used to terminate the process
  }
};

module.exports = connectDB;
