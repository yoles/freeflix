import { Module } from '@nestjs/common';
import { MovieController } from './controllers/movie.controller';
import { I_MOVIE_REPOSITORY, IMovieRepository } from './ports/movie.repository';
import { StubMovieRepository } from './adapters/movies.stub';
import { GetTrendingMovies } from './usecases/get-trending-movies.usecase';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [
    {
      provide: I_MOVIE_REPOSITORY,
      useClass: StubMovieRepository,
    },
    {
      provide: GetTrendingMovies,
      inject: [I_MOVIE_REPOSITORY],
      useFactory: (movieRepository) => new GetTrendingMovies(movieRepository),
    }
  ],
  exports: [I_MOVIE_REPOSITORY],
})
export class MoviesModule {}
