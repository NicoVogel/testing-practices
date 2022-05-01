import { Dependency } from './dependency';

export class UsesDependency {
  private dependency = new Dependency();

  someAction(): void {
    const value = this.dependency.someFunction(42);
    console.log(value);
  }
}
