export default async function handler(req, res) {
  const apiUrl = "https://movies-api-gabesone.vercel.app" + req.query.path;

  try {
    const response = await fetch(apiUrl, {
      method: get,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    res.send(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
