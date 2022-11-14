const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
require("dotenv").config();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

const connectDB = require("./database/connection");
// const connectDB = require("./database/connection");
const projectRoute = require("./route/projectRoute");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "development") {
//     console.error(error);
//   }
//   next(error);
// });
// app.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "development") {
//     res.status(500).json({
//       message: error.message,
//       stack: error.stack,
//     });
//   } else {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
app.use("/api", projectRoute);

app.listen(process.env.PORT || 8000, async () => {
  console.log("Server is Running");
  await connectDB();
});
