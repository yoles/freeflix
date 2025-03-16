import { MovieTorrent } from "../entities/movie.entity";
import { ITorrentScraper } from "../ports/torrent.repository";
import { TorrentLinksNotFoundException } from "../exceptions/torrent-links-not-found";
import { log } from "console";

export class StubTorrentScraper implements ITorrentScraper {

  async searchTorrents(movieTitle: string): Promise<MovieTorrent[]> {
    if (movieTitle === "not-found") {
      throw new TorrentLinksNotFoundException();
    }
    console.log("StubTorrentScraper.searchTorrents", movieTitle);
    return [
      new MovieTorrent({
        title: "Torrent 1",
        url: "https://example.com/torrent1",
        size: "100MB",
        seeds: 100,
        leeches: 50
      }),
      new MovieTorrent({
        title: "Torrent 2",
        url: "https://example.com/torrent2",
        size: "200MB",
        seeds: 200,
        leeches: 100
      })
    ]
  }
}