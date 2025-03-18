import { Module } from '@nestjs/common';
import { MovieController } from './controllers/movie.controller';
import { I_MOVIE_REPOSITORY } from './ports/movie.repository';
import { GetTrendingMovies } from './usecases/get-trending-movies.usecase';
import { MovieRepository } from './adapters/movies.tmdb';
import { GetMovieDetail } from './usecases/get-movie-detail.usecase';
import { StubMovieRepository } from './adapters/movies.stub';
import { SearchMovie } from './usecases/search-movie.usecase';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [
    {
      provide: I_MOVIE_REPOSITORY,
      useClass: StubMovieRepository,
      /**** System ****/
      // useClass: MovieRepository,
    },
    {
      provide: GetTrendingMovies,
      inject: [I_MOVIE_REPOSITORY], 
      useFactory: (movieRepository) => new GetTrendingMovies(movieRepository),
    },
    {
      provide: GetMovieDetail,
      inject: [I_MOVIE_REPOSITORY],
      useFactory: (movieRepository) => new GetMovieDetail(movieRepository),
    },
    {
      provide: SearchMovie,
      inject: [I_MOVIE_REPOSITORY],
      useFactory: (movieRepository) => new SearchMovie(movieRepository),
    },
  ],
  exports: [I_MOVIE_REPOSITORY],
})
export class MoviesModule {}
