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

  it("should validate first parameter", () => {
    // Given

    // When
    const result = comp.handleUserInput(-1, 10);

    // Then
    expect(result.valid).to.be.false;
    if (result.valid === true) return;
    expect(result.error).to.not.be.undefined;
    expect(service.computeByBackend).to.have.not.been.called;
  });

  it("should validate second parameter", () => {
    // Given

    // When
    const result = comp.handleUserInput(10, 200);

    // Then
    expect(result.valid).to.be.false;
    if (result.valid === true) return;
    expect(result.error).to.not.be.undefined;
    expect(service.computeByBackend).to.have.not.been.called;
  });

  it("should call the backend", () => {
    // Given

    // When
    const result = comp.handleUserInput(-1, 10);

    // Then
    expect(result.valid).to.be.true;
    if (result.valid === false) return;
    expect(service.computeByBackend).to.have.been.called;
  });
});
