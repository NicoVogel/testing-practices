export class RouteBuilder {
  private placeholder = "http://place.holder"
  private url: URL;
  constructor(route: string){
    this.url = new URL(route, this.placeholder);
  }

  public appendPath(path: string){
    this.url.pathname += path;
  }

  public appendQueryParameter(name: string, value: string) {
    this.url.searchParams.set(name, value);
  }

  public toRoute() {
    return this.url.toString().replace(this.placeholder, "");
  }

}
