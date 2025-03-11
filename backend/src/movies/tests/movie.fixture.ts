// import {IMovieRepository} from "@movies/ports/movie.repository";
// import {TestApp} from "@src/tests/utils/test-app";
// import {IFixture} from "@src/tests/utils/fixture";
// import { InMemoryMovieRepository } from "../adapters/movies.in-memory";
// import { Movie } from "../entities/movie.entity";

// export class MovieFixture implements IFixture {
//   constructor(private entity: Movie) {}

//   async load(app: TestApp) {
//     const movieRepository = app.get<InMemoryMovieRepository>(InMemoryMovieRepository);
//     movieRepository.movies.push(this.entity);
//   }
// }