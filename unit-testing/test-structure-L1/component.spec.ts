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
