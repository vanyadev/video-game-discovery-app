import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Screenshot } from "../types";

export const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshot", gameId],
    queryFn: apiClient.getAll,
  });
};
