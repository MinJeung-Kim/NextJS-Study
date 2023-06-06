import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Link from "next/link"; 

export default async function ProductsPage() {
  throw new Error(); // error page test
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
