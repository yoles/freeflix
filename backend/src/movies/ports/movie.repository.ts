import { Movie } from '../entities/movie.entity';

export const I_MOVIE_REPOSITORY = 'I_MOVIE_REPOSITORY';

export interface IMovieRepository {
  getTrends(): Promise<Movie[]>;
}