// Trending tv shows
export async function getTrendingTVShows() {
  try {
    const res = await fetch("/api/tv");
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get trending tv shows");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET a single tv show
export async function getTVShow(id) {
  try {
    const res = await fetch(`/api/tv/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get tv show");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}
