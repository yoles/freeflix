import {IMovieRepository} from "@movies/ports/movie.repository";
import {Movie, MovieDetail} from "@movies/entities/movie.entity";
import { MovieNotFoundException } from "../exceptions/movie-not-found";

export class StubMovieRepository implements IMovieRepository {
    async getTrends(): Promise<Movie[]> {
        const movies = [
            new Movie({
                id: 1,
                title: "Movie 1",
                originalTitle: "Original Movie 1",
                overview: "Overview 1",
                imageURL: "/path1.jpg",
                releaseDate: new Date(2025, 1, 1),
                voteAverage: 8.5,
                adult: false
            }),
            new Movie({
                id: 2, 
                title: "Movie 2", 
                originalTitle: "Original Movie 2",
                overview: "Overview 2",
                imageURL: "/path2.jpg",
                releaseDate: new Date(2024, 2, 1),
                voteAverage: 7.5,
                adult: false
            }),
        ];
        return movies;
    }

    async getDetail(id: number): Promise<MovieDetail> {
        if (id === 404) {
            throw new MovieNotFoundException();
        }
        return new MovieDetail({
            id: 1,
            title: "Movie 1",
            originalTitle: "Original Movie 1",
            overview: "Overview 1",
            imageURL: "/path1.jpg",
            releaseDate: new Date(2025, 1, 1),
            voteAverage: 8.5,
            adult: false,
            genres: [],
            runtime: 120
        });
    }

    async search(title: string): Promise<Movie[]> {
        if (title === "not-found") {
            return [];
        }
        return [
            new Movie({
                id: 1,
                title: "Movie 1",
                originalTitle: "Original Movie 1",
                overview: "Overview 1",
                imageURL: "/path1.jpg",
                releaseDate: new Date(2025, 1, 1),
                voteAverage: 8.5,
                adult: false
            })
        ];
    }
}