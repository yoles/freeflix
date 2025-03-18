import { BadRequestException, Body, Controller, Get, Param, Post} from '@nestjs/common';
import { GetTorrentLinks } from '../usecases/get-torrent-links.usecase';
import { GetMagnetLink } from '../usecases/get-magnet-link.usecase';

@Controller('torrents')
export class TorrentController {

    constructor(
        private readonly getTorrentsUseCase: GetTorrentLinks,
        private readonly getMagnetLinkUseCase: GetMagnetLink
    ) {}

    @Get('/search/:movieTitle')
    async getTorrentLinks(@Param('movieTitle') movieTitle: string) {
        const torrents = await this.getTorrentsUseCase.execute(movieTitle);
        return torrents.map((torrent) => torrent.props);
    }

    @Post('/magnet-link')
    async getMagnetLink(@Body() body: { url: string }) {
        const urlRegex = /^\/torrent\/\d{1,20}\/[a-zA-Z0-9-_]{1,100}$/;
        if (!urlRegex.test(body.url)) {
            throw new BadRequestException('URL format invalide');
        }
        const magnetLink = await this.getMagnetLinkUseCase.execute(body.url);
        return {uri: magnetLink};
    }

    @Get('/stream/:magnet/:filename')
    async streamTorrent(
        @Param('magnet') magnet: string, 
        @Param('filename') filename: string
    ) {

    }
}
