export interface TVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids?: number[];
}

export interface TVShowDetails extends TVShow {
  genres: { id: number; name: string }[];
  homepage:string;
  last_air_date:number;
  number_of_episodes: number;
  number_of_seasons: number;
  status: string;
  tagline: string;
  production_companies:{logo_path:string}[]
spoken_languages:{english_name:string}[]
  seasons: {
    air_date: string;
    episode_count: number;
    vote_average:number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
  }[];
}

export interface TVShowResponse {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
}