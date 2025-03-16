import { Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { GetTrendingMovies } from '@movies/usecases/get-trending-movies.usecase';
import { GetMovieDetail } from '../usecases/get-movie-detail.usecase';
import { GetTorrentLinks } from '../usecases/get-torrent-links.usecase';

@Controller('movies')
export class MovieController {
    constructor(
        private readonly getTrendingMoviesUseCase: GetTrendingMovies,
        private readonly getMovieDetailUseCase: GetMovieDetail,
        private readonly getMovieTorrentsUseCase: GetTorrentLinks
    ) {}

    @Get('/trend')
    async getTrending() {
        const movies = await this.getTrendingMoviesUseCase.execute();
        return movies.map((movie) => movie.props);
    }

    @Get('/:id/detail')
    async getMovieDetail(@Param('id', ParseIntPipe) id: number) {
        const movie = await this.getMovieDetailUseCase.execute(id);
        return movie.props;
    }

    @Get('/:movieTitle/torrents')
    async getMovieTorrents(@Param('movieTitle') movieTitle: string) {
        const torrents = await this.getMovieTorrentsUseCase.execute(movieTitle);
        return torrents.map((torrent) => torrent.props);
    }
}