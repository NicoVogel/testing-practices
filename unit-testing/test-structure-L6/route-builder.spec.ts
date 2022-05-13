import { expect, use } from "chai";
import * as sinonChai from "sinon-chai";
import { RouteBuilder } from "./route-builder";
use(sinonChai);

type Appends =
  | {
      type: "path";
      value: string;
    }
  | {
      type: "query";
      name: string;
      value: string;
    };

type TestStructure = {
  name: string;
  data: {
    startValue: string;
    appends: Appends[];
    expectedResult: string;
  };
};

const tests: TestStructure[] = [
  {
    name: "should be the same as input",
    data: {
      startValue: "/test",
      appends: [],
      expectedResult: "/test",
    },
  },
  {
    name: "should append the path",
    data: {
      startValue: "/test",
      appends: [{ type: "path", value: "/sub" }],
      expectedResult: "/test/sub",
    },
  },
  //...
];

describe("L6 - Automate test creation with json", () => {
  tests.forEach(({ name, data }) => {
    it(name, () => {
      // Given
      const builder = new RouteBuilder(data.startValue);

      data.appends.forEach((append) => {
        switch (append.type) {
          case "path":
            return builder.appendPath(append.value);
          case "query":
            return builder.appendQueryParameter(append.name, append.type);
        }
      });

      // When
      const result = builder.toRoute();

      // Then
      expect(result).to.equal(data.expectedResult);
    });
  });
});
