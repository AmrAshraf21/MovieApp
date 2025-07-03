import { Movie,  } from './movie.model';
import { TVShow} from './tv-show-model';

export type WishlistItem = (Movie | TVShow) & {
  id: number;
  type: 'movie' | 'tvshow';
  addedDate: Date;
  title?: string;        // For movies
  name?: string;   // For TV shows
  overview:string      
  poster_path: string | null;
  vote_average: number;
  release_date?: string; // For movies
  first_air_date?: string; // For TV show
};