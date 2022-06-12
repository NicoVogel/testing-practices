import { Route } from "./route";

export function findRoute(routes: Route[], url: string): Route | undefined {
  const possibleMatches = findMatches(routes, url);
  if (possibleMatches.length === 0) {
    return undefined;
  }
  return findBestMatch(possibleMatches);
}

// This code is only there so that no errors are shown.
// It does not serve any further purpose for the example

function findMatches(routes: Route[], url: string): Route[] {
  return [];
}

function findBestMatch(routes: Route[]): Route {
  return { path: "" };
}
