import { ITorrentScraper } from '../ports/torrent.repository';


export class GetMagnetLink {
  constructor(
    private readonly torrentScraper: ITorrentScraper
  ) {}

  async execute(url: string): Promise<string> {
    return this.torrentScraper.findMagnetLink(url);
  }
}

