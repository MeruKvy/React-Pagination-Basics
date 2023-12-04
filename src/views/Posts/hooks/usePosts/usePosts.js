import axios from "axios";
import { useEffect, useState } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1)

  const getPosts = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/posts?limit=3&skip=${currentPage * 3 - 3}`);

      setPosts(res.data?.posts);
      setTotalPosts(res.data?.total)
    } catch(error) {}
  };

  useEffect(() => {
    getPosts();
  }, [currentPage]);

  return { posts, totalPosts, currentPage, setCurrentPage }
}
