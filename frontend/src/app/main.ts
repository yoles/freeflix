import {Dependencies} from "@src/app/dependencies.ts";

export class App {
  public dependencies: Dependencies;

  constructor() {
    this.dependencies = this.setupDependencies();
  }

  setupDependencies(): Dependencies {
    return {};
  }
}

export const app = new App();
