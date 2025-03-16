import { Module } from '@nestjs/common';
import { StubTorrentScraper } from './adapters/torrent.stub';
import { I_TORRENT_SCRAPER } from './ports/torrent.repository';
import { GetTorrentLinks } from './usecases/get-torrent-links.usecase';
import { X1337TorrentScraper } from './adapters/torrent.1337x';
import { TorrentController } from './controllers/torrent.controller';

@Module({
  imports: [],
  controllers: [TorrentController],
  providers: [
    {
      provide: I_TORRENT_SCRAPER,
      useClass: StubTorrentScraper,
      /**** System ****/
      // useClass: X1337TorrentScraper,
    },
    {
      provide: GetTorrentLinks,
      inject: [I_TORRENT_SCRAPER],
      useFactory: (torrentScraper) => new GetTorrentLinks(torrentScraper),
    }
  ],
  exports: [I_TORRENT_SCRAPER],
})
export class TorrentsModule {}
