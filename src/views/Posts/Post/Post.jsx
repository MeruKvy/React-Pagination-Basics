import React from "react";
import "./post.css"

export function Post({post}) {
  return <div className="post" >{post.title}</div>;
}
