import { expect, use } from "chai";
import * as sinonChai from "sinon-chai";
use(sinonChai);

import { Component } from "./component";

describe("L3 - Having a beforeEach function that requires some input to get started", () => {
  let comp: Component;
  /**
   * This function replaces the "beforeEach" hook.
   * I use the initTest function whenever the setup dependents on the test data.
   *
   * The intention here is to keep it as close to the "beforeEach" hook as possible.
   * So, the variables are still declared at the top and the "initTest" function assigns the values to it.
   * The only difference is that it needs to be called in each test, but that is a small trade off in order
   * to keep all the relevant information inside of a test.
   */
  const initTest = (startupUrl: string) => {
    /**
     * The url is relevant for each test, so it needs to be passed in.
     */
    comp = new Component(() => startupUrl);
  };

  it("should not change input", () => {
    // Given
    initTest("http://test.com/");

    // When
    const result = comp.handleUserInput(1);

    // Then
    expect(result).to.equal(1);
  });

  it("should change input", () => {
    // Given
    initTest("http://test.com/?id=42");

    // When
    const result = comp.handleUserInput(1);

    // Then
    expect(result).to.equal(43);
  });

  it("should not change input for invalid query parameter", () => {
    // Given
    initTest("http://test.com/?id=abc");

    // When
    const result = comp.handleUserInput(1);

    // Then
    expect(result).to.equal(1);
  });
});
