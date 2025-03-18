import { Movie } from '@movies/entities/movie.entity';
import { IMovieRepository } from '@movies/ports/movie.repository';


export class SearchMovie {
  constructor(private readonly movieRepository: IMovieRepository) {}

  async execute(title: string): Promise<Movie[]> {
    return this.movieRepository.search(title);
  }
}

