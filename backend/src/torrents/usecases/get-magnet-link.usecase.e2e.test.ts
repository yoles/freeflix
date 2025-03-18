import * as request from 'supertest';
import {TestApp} from "@src/tests/utils/test-app";

describe('As a user, i get the magnet link of a torrent', () => {
  let app: TestApp;

  beforeEach(async () => {
      app = new TestApp();
      await app.setup()
  });

  afterEach(async () => {
      await app.cleanup();
  });

  describe('get magnet link of a torrent', () => {
    it('should return magnet link of a torrent', async () => {
      const response = await request(app.getHttpServer())
        .post("/torrents/magnet-link")
        .send({ url: "/torrent/1234567890/super-movie" });

      const magnetLink = response.body;
      expect(magnetLink.uri).toEqual(expect.any(String));
    });

    it('should throw an error if the url is invalid', async () => {
      const response = await request(app.getHttpServer())
        .post("/torrents/magnet-link")
        .send({ url: "/torrent/invalid-url" });
      expect(response.status).toBe(400);
    });
  });
});

