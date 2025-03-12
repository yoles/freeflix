import { DomainError, HttpError } from '../../shared/exception';

const defaultMessage = 'Movie not found';

export class MovieNotFoundException extends HttpError {
  constructor(message: string = defaultMessage) {
    super(message, 404);
  }
}
