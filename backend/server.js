require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const movieRoutes = require("./routes/movies");
const tvRoutes = require("./routes/tv");

const corsOptions = {
  origin: "https://movies-gabesone.vercel.app",
  optionsSuccessStatus: 200,
};

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/movie", movieRoutes);

app.use("/tv", tvRoutes);

// Listen
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
