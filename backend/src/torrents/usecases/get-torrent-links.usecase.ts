import { ITorrentScraper } from '../ports/torrent.repository';
import { TorrentMetadata } from '../entities/torrent.entity';


export class GetTorrentLinks {
  constructor(
    private readonly torrentScraper: ITorrentScraper
  ) {}

  async execute(movieTitle: string): Promise<TorrentMetadata[]> {
    return this.torrentScraper.searchTorrents(movieTitle);
  }
}

