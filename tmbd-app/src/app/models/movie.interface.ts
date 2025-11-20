export interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}

export interface DiscoverResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
