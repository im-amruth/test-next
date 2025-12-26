import { serviceBase } from "./servise-base";

export class Productservices extends serviceBase {
  static async getProducts() {
    const response = await fetch(this.getURL("/products"), {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  }

  static async getProductById(id: string | number) {
    const response = await fetch(this.getURL(`/products/${id}`));

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return response.json();
  }
}
