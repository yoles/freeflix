import * as request from 'supertest';
import {TestApp} from "@src/tests/utils/test-app";

describe('As a user, i get the trending movies list', () => {
  let app: TestApp;

  beforeEach(async () => {
      app = new TestApp();
      await app.setup()
  });

  afterEach(async () => {
      await app.cleanup();
  });

  describe('getTrending', () => {
    it('should return trending movies', async () => {
      const response = await request(app.getHttpServer()).get(`/movies/trend`);
      expect(response.body.length).toBeGreaterThan(0);
      
      const movie1 = response.body[0]
      expect(movie1).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          releaseDate: expect.any(String),
          voteAverage: expect.any(Number),
          overview: expect.any(String),
          imageURL: expect.any(String),
        }),
      );
    });
  });
});