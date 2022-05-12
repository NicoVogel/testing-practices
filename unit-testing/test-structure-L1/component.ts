import { Service } from "./service";

export class Component {
  constructor(private backendService: Service) {}

  validateUserInput(input: number): boolean {
    return this.backendService.getItems().some((item) => item === input);
  }
}
