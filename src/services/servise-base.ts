export abstract class serviceBase {
  protected static readonly API_URL = "https://fakestoreapi.com";

  protected static getURL(path: string): string {
    return `${this.API_URL}${path}`;
  }
}
