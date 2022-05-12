import { expect, use } from "chai";
import * as sinonChai from "sinon-chai";
import { hasElement } from "./has-element";
use(sinonChai);

/**
 * Tip: Multi level tests are best mixed with the "initTest" method from level 3
 */

describe("L4 - Component", () => {
  /**
   * Sub describes are great to group your tests by partial contexts.
   * It is usually helpful for units that are to big to be part of one file and therefore are split into multiple files.
   * Or if you have some generic API that can handle a wider range of inputs (e.g. a function with multiple overloads).
   */
  describe("number values", () => {
    /**
     * Even though not used here, it is important to understand how the test hooks like beforeEach and afterEach work
     * for multi level describes.
     * Each hook is level dependent.
     * Example:
     * describe
     *   beforeEach (1)
     *   before (2)
     *   it (3)
     *   describe
     *     afterEach(4)
     *     it (5)
     *     it (6)
     *   describe
     *     beforeEach (7)
     *     it (8)
     *     it (9)
     *
     * Now the order of execution is in this case (I tried to group it for better visualization):
     * 2,(1,3),(1,5,4,6,4),(1,7,8,7,9)
     *
     * As can be seen, the beforeEach (1) is only executed before each of the it and describe of the same level.
     * Keep this in mind when creating test files with nesting
     */

    it("should find value", () => {
      // Given
      const items = [1, 2, "3", "4"];

      // When
      const result = hasElement(items, 1);

      // Then
      expect(result).to.be.true;
    });

    it("should not find value", () => {
      // Given
      const items = [1, 2, "3", "4"];

      // When
      const result = hasElement(items, 3);

      // Then
      expect(result).to.be.false;
    });
  });

  describe("string values", () => {
    it("should find value", () => {
      // Given
      const items = [1, 2, "3", "4"];

      // When
      const result = hasElement(items, "3");

      // Then
      expect(result).to.be.true;
    });

    it("should not find value", () => {
      // Given
      const items = [1, 2, "3", "4"];

      // When
      const result = hasElement(items, 1);

      // Then
      expect(result).to.be.false;
    });
  });
});
