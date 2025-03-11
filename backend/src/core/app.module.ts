import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from '@src/movies/movie.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MoviesModule,  ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
