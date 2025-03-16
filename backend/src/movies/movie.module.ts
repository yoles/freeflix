import { Module } from '@nestjs/common';
import { MovieController } from './controllers/movie.controller';
import { I_MOVIE_REPOSITORY } from './ports/movie.repository';
import { GetTrendingMovies } from './usecases/get-trending-movies.usecase';
import { MovieRepository } from './adapters/movies.tmdb';
import { GetMovieDetail } from './usecases/get-movie-detail.usecase';
import { StubMovieRepository } from './adapters/movies.stub';
import { StubTorrentScraper } from './adapters/torrent.stub';
import { I_TORRENT_SCRAPER } from './ports/torrent.repository';
import { GetTorrentLinks } from './usecases/get-torrent-links.usecase';
import { X1337TorrentScraper } from './adapters/torrent.1337x';

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
      provide: I_TORRENT_SCRAPER,
      useClass: StubTorrentScraper,
      /**** System ****/
      // useClass: X1337TorrentScraper,
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
      provide: GetTorrentLinks,
      inject: [I_TORRENT_SCRAPER],
      useFactory: (torrentScraper) => new GetTorrentLinks(torrentScraper),
    }
  ],
  exports: [I_MOVIE_REPOSITORY, I_TORRENT_SCRAPER],
})
export class MoviesModule {}
