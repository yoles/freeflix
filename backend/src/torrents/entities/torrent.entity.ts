
export type TorrentProps = {
  title: string;
  url: string;
  seeds: number;
  leeches: number;
  size: string;
  magnetLink?: MagnetLink | null;
}

export class Torrent {
  public props: TorrentProps;

  constructor(props: TorrentProps) {
    this.props = props;
  }
}

export class MagnetLink {
  constructor(public url: string) {}
}