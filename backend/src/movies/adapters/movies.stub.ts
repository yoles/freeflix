import {IMovieRepository} from "@movies/ports/movie.repository";
import {Movie} from "@movies/entities/movie.entity";

export class StubMovieRepository implements IMovieRepository {
    async getTrends(): Promise<Movie[]> {
        return [
            new Movie(1, "Movie 1", "Overview 1", "/path1.jpg", new Date(202, 1, 1), 8.5),
            new Movie(2, "Movie 2", "Overview 2", "/path2.jpg", new Date(2024, 2, 1), 7.5),
        ];
        ;
    }
}