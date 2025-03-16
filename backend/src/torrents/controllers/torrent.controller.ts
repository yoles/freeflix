import { Controller, Get, Param} from '@nestjs/common';
import { GetTorrentLinks } from '../usecases/get-torrent-links.usecase';

@Controller('torrents')
export class TorrentController {
    constructor(
        private readonly getTorrentsUseCase: GetTorrentLinks
    ) {}

    @Get('/search/:movieTitle')
    async getMovieTorrents(@Param('movieTitle') movieTitle: string) {
        const torrents = await this.getTorrentsUseCase.execute(movieTitle);
        return torrents.map((torrent) => torrent.props);
    }
}