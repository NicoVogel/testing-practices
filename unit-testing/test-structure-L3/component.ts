export class Component {
  public readonly id: number;

  constructor(url: string) {
    const urlWrapper = new URL(url);
    const idParam = urlWrapper.searchParams.get("id");
    if (!idParam) {
      throw new Error('The id parameter is required');
    }
    const parsedId = +idParam;
    if (Object.is(parsedId, NaN)) {
      throw new Error('The id parameter is not a number');
    }
    this.id = parsedId;
  }
}
