import { useQuery } from "@tanstack/react-query";

import { personFetch } from "../services/apiPerson";

function usePersonData(personId) {
  const personQuery = useQuery({
    queryKey: ["person"],
    queryFn: () => personFetch(personId),
    gcTime: 1000,
  });

  return { personQuery };
}

export default usePersonData;
