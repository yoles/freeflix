import { Request, Response } from 'express';
import { GetTrendingMovies } from '../usecases/get-trending-movies.usecase.js';

export class MovieController {
    constructor(
        private readonly getTrendingMoviesUseCase: GetTrendingMovies
    ) {}

    // [Get] '/trend'
    async getTrending(req: Request, res: Response) {
        const movies = await this.getTrendingMoviesUseCase.execute();
        res.status(200).json(movies);
    }
}

