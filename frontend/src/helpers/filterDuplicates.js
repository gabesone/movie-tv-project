export function filterDuplicates(posterArr) {
  const trackedIds = new Set();
  const filteredPoster = [];

  for (const poster of posterArr ?? []) {
    if (!trackedIds.has(poster.id)) {
      trackedIds.add(poster.id);
      filteredPoster.push(poster);
    }
  }

  return filteredPoster;
}
