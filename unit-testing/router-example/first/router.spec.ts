import { Router } from "./router";

describe("Router first", () => {
  it("should fail fast, when no routes are provided", () => {
    expect(() => new Router([])).to.throw();
  });

  it("should change route", () => {
    const routes = [{ path: "/user" }, { path: "/profile" }];
    const router = new Router(routes);

    router.handleUrlChange("/profile");

    expect(router.currentRoute).to.equal({ path: "/profile" });
  });

  it("should not change current route, if it is the same route", () => {
    const routes = [{ path: "/user" }, { path: "/profile" }];
    const router = new Router(routes);
    const currentRoute = router.currentRoute;

    router.handleUrlChange("/user");

    expect(router.currentRoute).to.equal(currentRoute);
  });
});
