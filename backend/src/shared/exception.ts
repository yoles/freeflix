export class DomainError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class HttpError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number
  ) {
    super(message);
    this.name = this.constructor.name;
    // Nécessaire pour que instanceof fonctionne correctement avec les classes personnalisées
    Object.setPrototypeOf(this, new.target.prototype);
  }
}