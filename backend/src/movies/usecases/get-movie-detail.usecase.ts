import { Movie } from '@movies/entities/movie.entity';
import { IMovieRepository } from '@movies/ports/movie.repository';


export class GetMovieDetail {
  constructor(private readonly movieRepository: IMovieRepository) {}

  async execute(id: number): Promise<Movie> {
    return this.movieRepository.getDetail(id);
  }
}

