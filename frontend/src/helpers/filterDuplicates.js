export function filterDuplicates(posterArr) {
  const trackedIds = new Set();
  const filteredPoster = [];

  for (const poster of posterArr ?? []) {
    if (!trackedIds.has(poster.id)) {
      trackedIds.add(poster.id);
      filteredPoster.push(poster);
    }
  }

  const filterNull = filteredPoster.filter(
    (poster) => poster.poster_path || poster.profile_path !== null,
  );
  const filterResult = filterNull.filter(
    (poster) => poster.poster_path || poster.profile_path !== undefined,
  );

  return filterResult;
}
