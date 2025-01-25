import { Movie } from "../entities/movie.entity";
import { MovieFixture } from "./movie.fixture";

export const e2eMovies = {
  movie1: new MovieFixture(
    new Movie(1, "Movie 1", "Overview 1", "/path1.jpg", new Date(202, 1, 1), 8.5),
  ),
  movie2: new MovieFixture(
    new Movie(2, "Movie 2", "Overview 2", "/path2.jpg", new Date(2024, 2, 1), 7.5),
  ),
};
