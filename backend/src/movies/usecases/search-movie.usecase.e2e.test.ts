import * as request from 'supertest';
import {TestApp} from "@src/tests/utils/test-app";

describe('As a user, i search for a movie', () => {
  let app: TestApp;

  beforeEach(async () => {
      app = new TestApp();
      await app.setup()
  });

  afterEach(async () => {
      await app.cleanup();
  });

  describe('search for a movie by title', () => {
    it('should return a list of movies', async () => {
      const response = await request(app.getHttpServer()).get(`/movies/search/super-movie`);
      const movies = response.body
      expect(movies.length).toBeGreaterThan(0);
    });

    it('should throw an error if the movie is not found', async () => {
      const response = await request(app.getHttpServer()).get(`/movies/search/not-found`);
      const movies = response.body
      expect(movies.length).toEqual(0);
    });
  });
});
