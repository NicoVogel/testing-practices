import { expect, use } from "chai";
import sinon from "ts-sinon";
import * as sinonChai from "sinon-chai";
import { backendCall } from "./backend-call";
use(sinonChai);

function runLater(cb: () => void) {
  setTimeout(cb, 50);
}

describe("L5 - Async tests", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    // mock the browser internal timer
    clock = sinon.useFakeTimers();
  });

  afterEach(() => sinon.restore());

  it("should handle backend call", async () => {
    // Given

    // When
    const result = backendCall(42);

    // Then
    // tick lets time pass
    clock.tick(50);
    const value = await result;
    expect(value).to.equal(50);
  });

  it("should handle backend call - done function", async (done) => {
    // Given

    // When
    // actually waits for 50 ms for the test
    const value = await backendCall(42);

    // Then
    expect(value).to.equal(50);
    done();
  });
});
