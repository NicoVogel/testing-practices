import { Service } from "./service";

type HandledUserInput =
  | {
      valid: true;
      result: number;
    }
  | {
      valid: false;
      error: string;
    };

export class Component {
  private calc = new Service();
  constructor() {}

  handleUserInput(first: number, second: number): HandledUserInput {
    if (first < 0) {
      return { valid: false, error: "First input cannot be smaller than 0" };
    }

    if (second > 100) {
      return {
        valid: false,
        error: "Second input cannot be greather than 100",
      };
    }
    return { valid: true, result: this.calc.computeByBackend(first, second) };
  }
}
