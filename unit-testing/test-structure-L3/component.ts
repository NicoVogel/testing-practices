export class Component {
  private importantQueryParameter: number;

  constructor(getUrl: () => string) {
    const url = new URL(getUrl());
    const addParam = url.searchParams.get("add") ?? "a";
    const addValue = +addParam;
    this.importantQueryParameter = !Object.is(addValue, NaN) ? addValue : 0;
  }

  handleUserInput(value: number): number {
    return value + this.importantQueryParameter;
  }
}
