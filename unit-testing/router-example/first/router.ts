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
    const route = this.findRoute(this.routes, url) ?? this.getDefaultRoute();
    if (route === this._currentRoute) {
      return;
    }
    this._currentRoute = route;
    this.updateShownPage(route);
  }

  private getDefaultRoute(): Route {
    return this.routes[0];
  }

  private findRoute(routes: Route[], url: string): Route | undefined {
    const possibleMatches = this.findMatches(routes, url);
    if (possibleMatches.length === 0) {
      return undefined;
    }
    return this.findBestMatch(possibleMatches);
  }

  /**
   * This code is only there so that no errors are shown.
   * It does not serve any further purpose for the example
   */
  private updateShownPage(route: Route): void {}

  private findMatches(routes: Route[], url: string): Route[] {
    return [];
  }

  private findBestMatch(routes: Route[]): Route {
    return {};
  }
}

interface Route {}
