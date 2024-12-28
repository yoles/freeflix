import {GetTrendingMovies} from "@movies/usecases/get-trending-movies.usecase";
import {InMemoryMovieRepository} from "@movies/adapters/trend-movies.in-memory";
import {IMovieRepository} from "@movies/ports/movie.repository-interface";
import {Movie} from "@movies/entities/movie.entity";

describe("As a user, i can see trending movies", () => {
    let movieRepository: IMovieRepository;
    let useCase: GetTrendingMovies;
    const movies: Movie[] = [
      new Movie(1, "Movie 1", "Overview 1", "/path1.jpg", new Date(202, 1, 1), 8.5),
      new Movie(2, "Movie 2", "Overview 2", "/path2.jpg", new Date(2024, 2, 1), 7.5),
    ];

    beforeEach(() => {
        movieRepository = new InMemoryMovieRepository(movies);
        useCase = new GetTrendingMovies(movieRepository);
    });

    it("should return the expected list of trending movies", async () => {
        const result = await useCase.execute();
        expect(result).toEqual(movies);
    });
});