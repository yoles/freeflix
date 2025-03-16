import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from '@src/movies/movie.module';
import { ConfigModule } from '@nestjs/config';
import { TorrentsModule } from '@src/torrents/torrent.module';

@Module({
  imports: [ConfigModule.forRoot(), MoviesModule, TorrentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
