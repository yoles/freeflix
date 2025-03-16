/************* MOVIE  *************/
export type MovieProps = {
  id: number;
  title: string;
  originalTitle: string;
  overview: string;
  imageURL: string;
  releaseDate: Date;
  voteAverage: number;
  adult: boolean;
}

export class Movie {
  public props: MovieProps;
  
  constructor(props: MovieProps) {
    this.props = props;
  }
}

/************* MOVIE DETAIL *************/
export type MovieDetailProps = MovieProps & {
  genres: {id: number, name: string}[]
  runtime: number;
  
}

export class MovieDetail {
  public props: MovieDetailProps;
  
  constructor(props: MovieDetailProps) {
    this.props = props;
  }
}