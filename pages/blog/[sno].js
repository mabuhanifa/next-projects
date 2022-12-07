import { useRouter } from "next/router";
import React from "react";
const Post = () => {
  const {query:{sno}} = useRouter();
  return <div>
{sno}
  </div>;
};

export default Post;
