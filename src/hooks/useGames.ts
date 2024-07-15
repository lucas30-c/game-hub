import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  // A design smell: The `parent_platforms` is not a Platform array. It is an array of objects where each object has a `platform` property and the type of which is a Platform.
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { 
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      
    } },
    [gameQuery]
  );

export default useGames;
