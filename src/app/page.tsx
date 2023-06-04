import Counter from "@/components/Counter"; 
import os from "os"; // Node APIs

export default function Home() {
  console.log("안녕👋 - 서버");
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다 !!</h1>
      <Counter />
    </>
  );
}
