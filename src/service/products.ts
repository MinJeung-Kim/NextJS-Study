import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

// 제품을 반환해주는 비동기 함수
export async function getProducts(): Promise<Product[]> {
    // 1. 경로 생성 (Node에서 제공해주는 path 사용)
    // 2. path.join(현재경로, json이 있는 폴더, 해당 파일명);
  const filePath = path.join(process.cwd(), "data", "products.json");
  // 3. fs : Node에서 제공해주는 file 입출력이 가능한 모듈.
  // 4. fs.readFile(생성한 경로, 인코딩 방식);
  const data = await fs.readFile(filePath, "utf-8");
  // 5. Object로 리턴.
  return JSON.parse(data);
}

// 사용자가 특정 경로로 갔을때 slug(id)를 전달해주면 제품에대한 객체 리턴.
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
