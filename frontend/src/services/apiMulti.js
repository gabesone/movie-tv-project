// https://api.themoviedb.org/3/search/multi

const API_URL = "https://api.themoviedb.org/3/search/multi?";
const API_KEY2 = "103e37f7523217a4747a42c3c5fc6d74";

// GET movies, tv shows or person
export async function getMulti(q) {
  try {
    const res = await fetch(`${API_URL}?api_key=${API_KEY2}&query=${q}`);
    const data = await res.json();

    if (!res.ok)
      throw new Error("Failed to get multi movies, tv shows or person");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}
