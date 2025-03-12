import { Movie, MovieDetail } from '../entities/movie.entity';

export const I_MOVIE_REPOSITORY = 'I_MOVIE_REPOSITORY';

export interface IMovieRepository {
  getTrends(): Promise<Movie[]>;
  getDetail(id: number): Promise<MovieDetail>;
}
