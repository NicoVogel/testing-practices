import { expect } from "chai";
import { DefaultStructure } from "./default-structure";

// one describe that contains the name of the component
describe("DefaultStructure", () => {
  let defaultStructure: DefaultStructure;

  /**
   * by moving the test setup into a single funciton, there is only a single place to look at.
   * This has the following benefits:
   * - clean tests
   * - the setup is not distributed between the tests, but only in this function
   * - no side effects possible (in case of pure funciton)
   */
  beforeEach(() => {
    defaultStructure = new DefaultStructure();
  });

  // short tests
  it("should return hello world", () => {
    // Given

    // When
    const restult = defaultStructure.example();

    // Then
    expect(restult).to.equal("hello world");
  });

  // short tests
  it("should return hello nico", () => {
    // Given
    defaultStructure.setName("nico");

    // When
    const restult = defaultStructure.example();

    // Then
    expect(restult).to.equal("hello world");
  });
});
