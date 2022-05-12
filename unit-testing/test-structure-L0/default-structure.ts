export class DefaultStructure {
  private name = "world";

  setName(name: string) {
    this.name = name;
  }

  example() {
    return `hello ${this.name}`;
  }
}
