import { useRouter } from "next/router";
import React from "react";

function Doc() {
  const {
    query: { params=[] },
  } = useRouter();
  //params will be an array if there are multiple route after docs
  return (
    <div>
      <div>doc Home page {params[0]} --- {params[1]}--- {params[2]} </div>
    </div>
  );
}

export default Doc;
