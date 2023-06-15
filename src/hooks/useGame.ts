import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Game } from "../types";

const apiClient = new APIClient<Game>("/games");

export const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
