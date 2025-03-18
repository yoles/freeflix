import { TorrentMetadata } from "@torrents/entities/torrent.entity";
import { ITorrentScraper } from "@torrents/ports/torrent.repository";
import { TorrentLinksNotFoundException } from "@torrents/exceptions/torrent-links-not-found";

export class StubTorrentScraper implements ITorrentScraper {

  async searchTorrents(movieTitle: string): Promise<TorrentMetadata[]> {
    if (movieTitle === "not-found") {
      throw new TorrentLinksNotFoundException();
    }
    return [
      new TorrentMetadata({
        title: "Torrent 1",
        url: "https://example.com/torrent1",
        size: "100MB",
        seeds: 100,
        leeches: 50
      }),
      new TorrentMetadata({
        title: "Torrent 2",
        url: "https://example.com/torrent2",
        size: "200MB",
        seeds: 200,
        leeches: 100
      })
    ]
  }

  async findMagnetLink(url: string): Promise<string> {
    return "magnet:?xt=urn:btih:example1"
  }
}