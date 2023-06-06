import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";

export default async function ProductsPage() {
  const products = await getProducts();

  // public API : https://meowfacts.herokuapp.com  => 새로 고침 할때마다 데이터가 변경됨.
  const res = await fetch("https://meowfacts.herokuapp.com", {
    cache: "reload",
    next: { revalidate: 0 },
  });
  const data = await res.json();
  const factText = data.data[0];

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
      <article className={styles.article}>{factText}</article>
    </>
  );
}
