import { Movie } from '@movies/entities/movie.entity';
import { IMovieRepository } from '@movies/ports/movie.repository';


export class GetTrendingMovies {
  constructor(private readonly movieRepository: IMovieRepository) {}

  async execute(): Promise<Movie[]> {
    return this.movieRepository.getTrends();
  }
}




