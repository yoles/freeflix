import { MovieTorrent } from '@movies/entities/movie.entity';

export const I_TORRENT_SCRAPER = 'I_TORRENT_SCRAPER';

export interface ITorrentScraper {
  searchTorrents(query: string): Promise<MovieTorrent[]>;
}