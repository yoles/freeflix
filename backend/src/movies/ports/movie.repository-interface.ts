import { Movie } from '../entities/movie.entity';

export interface IMovieRepository {
  getTrending(): Promise<Movie[]>;
}