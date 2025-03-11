export type MovieProps = {
  id: number;
  title: string;
  overview: string;
  imageURL: string;
  releaseDate: Date;
  voteAverage: number;
}

export class Movie {
  public props: MovieProps;
  
  constructor(props: MovieProps) {
    this.props = props;
  }
}