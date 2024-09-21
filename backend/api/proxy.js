module.exports = async (req, res) => {
  console.log("Incoming request path:", req.query.path); // Log the incoming path

  const apiUrl = "https://movies-api-gabesone.vercel.app" + req.query.path;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.send(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
};
