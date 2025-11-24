export interface MovieDetail {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: { id: number; name: string }[];
  vote_average: number;
  vote_count: number;
  tagline: string;
  status: string;
  homepage?: string | null;
}
