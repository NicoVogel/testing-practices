import sinon, { StubbedInstance } from "ts-sinon";
import { expect, use } from "chai";
import * as sinonChai from "sinon-chai";
use(sinonChai);

import { stubClassSingleton } from "../helper/sinon-helper";
import { Component } from "./component";
/**
 * This kind of import wraps all exports of a file into an object.
 * In TS one file is one module
 */
import * as ServiceModule from "./service";

describe("L2 - Depending on other classes which are instantiated within the unit", () => {
  let comp: Component;
  let service: StubbedInstance<ServiceModule.Service>;
  beforeEach(() => {
    /**
     * As we cannot inject the mock, we need to mock the class (keep in mind that classes are just functions in JS).
     * The nice part is that, with the syntax we used in the import, we can stub the class.
     * I created a utility that only stubs class functions (because sinon does not a very good job at typing such functions).
     */
    service = stubClassSingleton(ServiceModule, "Service");
    /**
     * Here is the equivalent without the utility
     */
    // sinon.stub(ServiceModule, "Service").returns(service = stubInterface<ServiceModule.Service>());

    comp = new Component();
  });

  /**
   * cleanup is still required
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
