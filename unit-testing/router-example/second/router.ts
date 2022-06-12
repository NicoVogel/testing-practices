import { findRoute } from "./find-route";
import { Route } from "./route";

export class Router {
  private _currentRoute: Route;
  public get currentRoute() {
    return this._currentRoute;
  }

  constructor(private routes: Route[]) {
    if (routes.length === 0) {
      throw new Error("Business Error, Router cannot function without routes.");
    }
    this._currentRoute = this.getDefaultRoute();
  }

  public handleUrlChange(url: string) {
    const route = findRoute(this.routes, url) ?? this.getDefaultRoute();
    if (route === this._currentRoute) {
      return;
    }
    this._currentRoute = route;
    this.updateShownPage(route);
  }

  private getDefaultRoute(): Route {
    return this.routes[0];
  }

  /**
   * This code is only there so that no errors are shown.
   * It does not serve any further purpose for the example
   */
  private updateShownPage(route: Route): void {}
}
