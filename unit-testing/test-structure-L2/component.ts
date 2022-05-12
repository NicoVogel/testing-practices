import { Service } from "./service";

export class Component {
  private backendService = new Service();
  constructor() {}

  validateUserInput(input: number): boolean {
    return this.backendService.getItems().some((item) => item === input);
  }
}
