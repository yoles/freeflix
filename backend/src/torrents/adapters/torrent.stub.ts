import { Torrent } from "@torrents/entities/torrent.entity";
import { ITorrentScraper } from "@torrents/ports/torrent.repository";
import { TorrentLinksNotFoundException } from "@torrents/exceptions/torrent-links-not-found";

export class StubTorrentScraper implements ITorrentScraper {

  async searchTorrents(movieTitle: string): Promise<Torrent[]> {
    if (movieTitle === "not-found") {
      throw new TorrentLinksNotFoundException();
    }
    return [
      new Torrent({
        title: "Torrent 1",
        url: "https://example.com/torrent1",
        size: "100MB",
        seeds: 100,
        leeches: 50
      }),
      new Torrent({
        title: "Torrent 2",
        url: "https://example.com/torrent2",
        size: "200MB",
        seeds: 200,
        leeches: 100
      })
    ]
  }
}