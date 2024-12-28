import {IMovieRepository} from "@movies/ports/movie.repository-interface";
import {Movie} from "@movies/entities/movie.entity";

export class InMemoryMovieRepository implements IMovieRepository {
    constructor(public movies: Movie[] = []) {}

    async getTrending(): Promise<Movie[]> {
        return this.movies;
    }
}