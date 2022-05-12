import sinon, { StubbedInstance, stubInterface } from "ts-sinon";
import { expect, use } from "chai";
import * as sinonChai from "sinon-chai";
use(sinonChai);

import { Component } from "./component";
import { Service } from "./service";

describe("L1 - Depending on other classes (dependency injection)", () => {
  let comp: Component;
  let service: StubbedInstance<Service>;
  beforeEach(() => {
    /**
     * We do not want to test the service itself as it is of another context.
     * So, we stub it and then inject it
     */
    service = stubInterface<Service>();
    comp = new Component(service);
  });

  /**
   * When creating stubs (or spies or however they are called in the framework),
   * then we need to clean up afterwards
   */
  afterEach(() => sinon.restore());

  it("should find no match for empty items", () => {
    // Given
    service.getItems.returns([]);

    // When
    const result = comp.validateUserInput(1);

    // Then
    expect(result).to.be.false;
  });

  it("should find no match with non empty items", () => {
    // Given
    service.getItems.returns([1, 2, 3]);

    // When
    const result = comp.validateUserInput(10);

    // Then
    expect(result).to.be.false;
  });

  it("should find a match", () => {
    // Given
    service.getItems.returns([1, 2, 3]);

    // When
    const result = comp.validateUserInput(1);

    // Then
    expect(result).to.be.true;
  });
});
