require("dotenv").config();

const express = require("express");
const movieRoutes = require("./routes/movies");
const tvRoutes = require("./routes/tv");

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/movie", movieRoutes);

app.use("/tv", tvRoutes);

// Listen
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
