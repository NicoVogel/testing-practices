import sinon, { StubbedInstance, stubInterface } from 'ts-sinon';

type AnyClass = new (...args: any[]) => any;
type OnlyClassProperties<T extends Record<string, unknown>> = {
  [Key in keyof T]: T[Key] extends AnyClass ? Key : never;
}[keyof T];

export function stubClass<
  T extends Record<string, unknown>,
  Key extends OnlyClassProperties<T>
>(
  classWrapper: T,
  name: Key
): sinon.SinonStub<Parameters<T[Key]>, InstanceType<T[Key]>> {
  return sinon.stub(classWrapper, name) as unknown as sinon.SinonStub<
    Parameters<T[Key]>,
    InstanceType<T[Key]>
  >;
}

export function stubClassSingelton<
  T extends Record<string, unknown>,
  Key extends OnlyClassProperties<T>
>(classWrapper: T, name: Key): StubbedInstance<InstanceType<T[Key]>> {
  const singeltonStub = stubInterface<InstanceType<T[Key]>>();
  // overrides the returned value of the constructor function, but the constructor is still executed!!
  stubClass(classWrapper, name).returns(singeltonStub);
  return singeltonStub;
}
