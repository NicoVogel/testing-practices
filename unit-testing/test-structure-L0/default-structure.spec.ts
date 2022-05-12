import { expect } from "chai";
import { DefaultStructure } from "./default-structure";

// one describe that contains the name of the component
describe("L0 - Getting familiar with test structure", () => {
  let defaultStructure: DefaultStructure;

  /**
   * by moving the test setup into a single function, there is only a single place to look at.
   * This has the following benefits:
   * - clean tests
   * - the setup is not distributed between the tests, but only in this function
   * - no side effects possible (in case of pure function)
   */
  beforeEach(() => {
    defaultStructure = new DefaultStructure();
  });

  // short tests
  it("should return hello world", () => {
    // Given

    // When
    const result = defaultStructure.example();

    // Then
    expect(result).to.equal("hello world");
  });

  // short tests
  it("should return hello nico", () => {
    // Given
    defaultStructure.setName("nico");

    // When
    const result = defaultStructure.example();

    // Then
    expect(result).to.equal("hello world");
  });
});
