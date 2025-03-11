import { Controller, Get} from '@nestjs/common';
import { GetTrendingMovies } from '@movies/usecases/get-trending-movies.usecase';

@Controller('movies')
export class MovieController {
    constructor(
        private readonly useCase: GetTrendingMovies
    ) {}

    @Get('/trend')
    async getTrending() {
        const movies = await this.useCase.execute();
        return movies.map((movie) => movie.props);
    }
}