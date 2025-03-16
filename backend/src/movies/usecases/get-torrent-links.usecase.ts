import { MovieTorrent } from '@movies/entities/movie.entity';
import { ITorrentScraper } from '../ports/torrent.repository';


export class GetTorrentLinks {
  constructor(
    private readonly torrentScraper: ITorrentScraper
  ) {}

  async execute(movieTitle: string): Promise<MovieTorrent[]> {
    return this.torrentScraper.searchTorrents(movieTitle);
  }
}

