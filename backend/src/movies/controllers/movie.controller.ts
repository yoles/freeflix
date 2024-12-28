import { Controller, Get} from '@nestjs/common';
import { GetTrendingMoviesUseCase } from '@movies/usecases/get-trending-movies.usecase';

@Controller('movies')
export class MovieController {
    constructor(
        private readonly getTrendingMoviesUseCase: GetTrendingMoviesUseCase
    ) {}

    @Get('/trend')
    async getTrending() {
        return this.getTrendingMoviesUseCase.execute();
    }
}