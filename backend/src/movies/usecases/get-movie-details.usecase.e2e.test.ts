import * as request from 'supertest';
import {TestApp} from "@src/tests/utils/test-app";

describe('As a user, i get the movie details', () => {
  let app: TestApp;

  beforeEach(async () => {
      app = new TestApp();
      await app.setup()
  });

  afterEach(async () => {
      await app.cleanup();
  });

  describe('get movies details', () => {
    it('should return detail of a movie', async () => {
      const response = await request(app.getHttpServer()).get(`/movies/1/detail`);
      
      const movie = response.body
      expect(movie).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          originalTitle: expect.any(String),
          releaseDate: expect.any(String),
          voteAverage: expect.any(Number),
          overview: expect.any(String),
          imageURL: expect.any(String),
          adult: expect.any(Boolean),
          genres: expect.any(Array),
          runtime: expect.any(Number),
        }),
      );
    });

    it('should throw an error if the movie is not found', async () => {
      const response = await request(app.getHttpServer()).get(`/movies/404/detail`);
      expect(response.status).toBe(404);
    });
  });
});
