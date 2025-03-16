import { ITorrentScraper } from '../ports/torrent.repository';
import { Torrent } from '../entities/torrent.entity';


export class GetTorrentLinks {
  constructor(
    private readonly torrentScraper: ITorrentScraper
  ) {}

  async execute(movieTitle: string): Promise<Torrent[]> {
    return this.torrentScraper.searchTorrents(movieTitle);
  }
}

