import { TorrentMetadata } from '@torrents/entities/torrent.entity';

export const I_TORRENT_SCRAPER = 'I_TORRENT_SCRAPER';

export interface ITorrentScraper {
  searchTorrents(query: string): Promise<TorrentMetadata[]>;
  findMagnetLink(url: string): Promise<string>;
}