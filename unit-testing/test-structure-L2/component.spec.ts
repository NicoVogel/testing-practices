import sinon, { StubbedInstance, stubInterface } from 'ts-sinon';
import { expect, use } from 'chai';
import * as sinonChai from 'sinon-chai';
use(sinonChai);

import { Component } from './component';
import * as ServiceModule from './service';
// import { stubClassSingelton } from '../helper/sinon-helper';

describe('Component', () => {
  let comp: Component;
  let service: StubbedInstance<ServiceModule.Service>;
  beforeEach(() => {
    // create a mock (stub) based on a type

    sinon.stub(ServiceModule, "Service").returns(service = stubInterface<ServiceModule.Service>());

    // service = stubClassSingelton(ServiceModule, "Service");

    comp = new Component();
  });

  // remove all mocks (stub, spy)
  afterEach(() => sinon.restore());

  it('should validate first parameter', () => {
    // Given

    // When
    const result = comp.handleUserInput(-1, 10);

    // Then
    expect(result.valid).to.be.false;
    if (result.valid === true) return;
    expect(result.error).to.not.be.undefined;
    expect(service.computeByBackend).to.have.not.been.called;
  });

  it('should validate second parameter', () => {
    // Given

    // When
    const result = comp.handleUserInput(10, 200);

    // Then
    expect(result.valid).to.be.false;
    if (result.valid === true) return;
    expect(result.error).to.not.be.undefined;
    expect(service.computeByBackend).to.have.not.been.called;
  });

  it('should call the backend', () => {
    // Given

    // When
    const result = comp.handleUserInput(-1, 10);

    // Then
    expect(result.valid).to.be.true;
    if (result.valid === false) return;
    expect(service.computeByBackend).to.have.been.called;
  });
});
