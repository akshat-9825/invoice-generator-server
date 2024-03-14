require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const auth = require("./routes/auth");
const user = require("./routes/user");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  `http://localhost:${process.env.LOCAL_CLIENT}`,
  process.env.CLIENT_URL,
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (
        !origin ||
        origin == allowedOrigins[1] ||
        origin === allowedOrigins[0]
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Db connected"))
  .catch((error) => console.log(error));

app.get("/api/v1/health", (req, res) => {
  res.json({
    service: "Invoice Generator Backend API Server",
    status: "true",
    time: new Date(),
  });
});

app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);

app.use("/*", (req, res) => {
  res.status(404).json({ errorMessage: "Route not found" });
});

app.use(errorHandler);

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend server running at http://${HOST}:${PORT}/`);
});
