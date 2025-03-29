import WebTorrent from 'webtorrent';
import express, { Request, Response } from 'express';
import { MovieController } from './movies/controllers/movie.controller.js';
import { GetTrendingMovies } from './movies/usecases/get-trending-movies.usecase.js';
import { MovieRepository } from './movies/adapters/movies.tmdb.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = process.env.PORT || 3000;
const client = new WebTorrent();

const movieRepository = new MovieRepository();
const getTrendingMovieUseCase = new GetTrendingMovies(movieRepository);

app.get('/trend', (req: Request, res: Response) => {
  const movieController = new MovieController(getTrendingMovieUseCase);
  movieController.getTrending(req, res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
