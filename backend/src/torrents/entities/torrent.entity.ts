
export type TorrentProps = {
  title: string;
  url: string;
  seeds: number;
  leeches: number;
  size: string;
  magnetLink?: string | null;
}

export class TorrentMetadata {
  public props: TorrentProps;

  constructor(props: TorrentProps) {
    this.props = props;
  }
}

export type TorrentStream = {
  infoHash: string;
  name: string;
  size: number;
}