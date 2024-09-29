const URL_PERSON = "https://api.themoviedb.org/3/person";
const API_KEY3 = "103e37f7523217a4747a42c3c5fc6d74";

export async function personFetch(personId) {
  const res = await fetch(`${URL_PERSON}/${personId}?api_key=${API_KEY3}`);
  return res.json();
}
