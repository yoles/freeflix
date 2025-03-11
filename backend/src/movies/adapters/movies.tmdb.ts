import {IMovieRepository} from "@movies/ports/movie.repository";
import {Movie} from "@movies/entities/movie.entity";
import { TMDB_MOVIE_POPULAR_URL } from "../constant";

export class MovieRepository implements IMovieRepository {
    async getTrends(): Promise<Movie[]> {
        const url = `${TMDB_MOVIE_POPULAR_URL}?language=en-US&page=1`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_TOKEN}`
          }
        };
        
        const response = await fetch(url, options);
        const data = await response.json();
        return data.results.map((datum: any) => {
          return new Movie({
            id: datum.id,
            title: datum.title,
            overview: datum.overview,
            imageURL: datum.poster_path,
            releaseDate: new Date(datum.release_date),
            voteAverage: datum.vote_average
          });
        });
    }
}