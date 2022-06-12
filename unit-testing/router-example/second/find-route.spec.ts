import { findRoute } from "./find-route";
import { Route } from "./route";

describe("Find Route", () => {
  it("should find no route if no routes are provided", () => {
    const routes: Route[] = [];
    const result = findRoute(routes, "");
    expect(result).to.be.undefined;
  });

  it("should find no route if the url does not match any route", () => {
    const routes: Route[] = [{ path: "/user" }];
    const result = findRoute(routes, "");
    expect(result).to.be.undefined;
  });

  it("should find a route that is an exact match", () => {
    const routes: Route[] = [{ path: "/user" }];
    const result = findRoute(routes, "/user");
    expect(result).to.equal({ path: "/user" });
  });
});
