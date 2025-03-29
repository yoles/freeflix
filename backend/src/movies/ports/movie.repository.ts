import { Movie } from '../entities/movie.entity';

export interface IMovieRepository {
  getTrends(): Promise<Movie[]>;
}
