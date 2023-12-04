import React from "react";
import "./posts.css";
import { Post } from "./Post/Post";
import usePosts from "./hooks";
import { Pagination } from "antd";

export function Posts() {
  const { posts, totalPosts, currentPage, setCurrentPage } = usePosts();
  return (
    <div className="posts__wrapper">
      <div className="posts">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
      <Pagination
        total={totalPosts}
        pageSize={3}
        current={currentPage}
        onChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}
