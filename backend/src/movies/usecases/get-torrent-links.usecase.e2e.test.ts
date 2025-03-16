import * as request from 'supertest';
import {TestApp} from "@src/tests/utils/test-app";

describe('As a user, i get the movie torrent links', () => {
  let app: TestApp;

  beforeEach(async () => {
      app = new TestApp();
      await app.setup()
  });

  afterEach(async () => {
      await app.cleanup();
  });

  describe('get movies torrent links', () => {
    it('should return torrent links of a movie', async () => {
      const response = await request(app.getHttpServer()).get(`/movies/super-movie/torrents`);    
      const movieTorrents = response.body;
      const movieTorrent = movieTorrents[0];
  
      expect(movieTorrent).toEqual(
        expect.objectContaining({
          url: expect.any(String),
          title: expect.any(String),
          size: expect.any(String),
          seeds: expect.any(Number),
          leeches: expect.any(Number),
        }),
      );
    });

    it('should throw an error if the movie is not found', async () => {
      const response = await request(app.getHttpServer()).get(`/movies/not-found/torrents`);
      expect(response.status).toBe(404);
    });
  });
});
