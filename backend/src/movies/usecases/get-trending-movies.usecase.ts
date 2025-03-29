import { Movie } from '@movies/entities/movie.entity.js';
import { IMovieRepository } from '@movies/ports/movie.repository.js';


export class GetTrendingMovies {
  constructor(private readonly movieRepository: IMovieRepository) {}

  async execute(): Promise<Movie[]> {
    return this.movieRepository.getTrends();
  }
}

