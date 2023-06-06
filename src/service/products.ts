import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

// 제품을 반환해주는 비동기 함수
export async function getProducts(): Promise<Product[]> {
    const filePath = path.join(process.cwd(), "data", "products.json");
   const data = await fs.readFile(filePath, "utf-8");
   return JSON.parse(data);
}

// 사용자가 특정 경로로 갔을때 slug(id)를 전달해주면 제품에대한 객체 리턴.
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
