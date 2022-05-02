import { expect, use } from 'chai';
import { UsesDependency } from './uses-dependency';
import * as DependencyClass from './dependency';
import sinon, { StubbedInstance, stubInterface } from 'ts-sinon';
import sinonChai from 'sinon-chai';

use(sinonChai);

// one describe that contains the name of the component
describe('ExampleComponent', () => {
  // short tests
  it('should return hello world', () => {
    // Given
    const { usesDependency, dependency } = setupTest();

    // When
    usesDependency.someAction();

    // Then
    expect(dependency.someFunction).to.have.been.calledOnce;
  });
});

type TestSetup = {
  usesDependency: UsesDependency;
  dependency: StubbedInstance<DependencyClass.Dependency>;
};

function mockDependency() {
  const dependency = stubInterface<DependencyClass.Dependency>();
  sinon.stub(DependencyClass, 'Dependency').returns(dependency);
  return { dependency };
}

function setupTest(): TestSetup {
  const { dependency } = mockDependency();
  // const dependency = stubGloablClass(DependencyClass, 'Dependency');
  return {
    usesDependency: new UsesDependency(),
    dependency,
  };
}
