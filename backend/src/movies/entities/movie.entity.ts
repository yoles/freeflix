export class Movie {
  constructor(
    public id: number,
    public title: string,
    public overview: string,
    public imageURL: string,
    public releaseDate: Date,
    public voteAverage: number,
  ) {}
}