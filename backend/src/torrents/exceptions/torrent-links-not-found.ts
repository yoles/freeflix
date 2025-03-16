import { HttpError } from '../../shared/exception';

const defaultMessage = 'Torrent links not found';

export class TorrentLinksNotFoundException extends HttpError {
  constructor(message: string = defaultMessage) {
    super(message, 404);
  }
}
