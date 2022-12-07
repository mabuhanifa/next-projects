import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const { push, replace } = useRouter();
  const click = () => {
    push("/product");
  };
  const clickR = () => {
    replace("/product");
  };
  return (
    <div>
      <h2>home</h2>

      <button onClick={click}>Place Order</button>
      <br />
      <button onClick={clickR}>Place Order</button>
      <br />

      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product">
        <a>product</a>
      </Link>
    </div>
  );
}
