import {IMovieRepository} from "@movies/ports/movie.repository";
import {Movie, MovieDetail} from "@movies/entities/movie.entity";
import { TMDB_MOVIE_DETAIL_URL, TMDB_MOVIE_POPULAR_URL, TMDB_MOVIE_SEARCH_URL } from "../constant";

export class MovieRepository implements IMovieRepository {
    async getTrends(): Promise<Movie[]> {
        const url = `${TMDB_MOVIE_POPULAR_URL}?language=fr-FR&page=1`;
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
            originalTitle: datum.original_title,
            overview: datum.overview,
            imageURL: datum.poster_path,
            releaseDate: new Date(datum.release_date),
            voteAverage: datum.vote_average,
            adult: datum.adult
          });
        });
    }

    async getDetail(id: number): Promise<MovieDetail> {
        const url = `${TMDB_MOVIE_DETAIL_URL}/${id}?language=fr-FR`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_TOKEN}`
          }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return new MovieDetail({
            id: data.id,
            title: data.title,
            originalTitle: data.original_title,
            overview: data.overview,
            imageURL: data.poster_path,
            releaseDate: new Date(data.release_date),
            voteAverage: data.vote_average,
            adult: data.adult,
            genres: data.genres,
            runtime: data.runtime
        });
    }

    async search(title: string): Promise<Movie[]> {
        const url = `${TMDB_MOVIE_SEARCH_URL}?query=${title}&language=fr-FR`;
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
            originalTitle: datum.original_title,
            overview: datum.overview,
            imageURL: datum.poster_path,
            releaseDate: new Date(datum.release_date),
            voteAverage: datum.vote_average,
            adult: datum.adult
          });
        });
    }
}