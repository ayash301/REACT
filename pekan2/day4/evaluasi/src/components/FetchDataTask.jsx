import React, { useState, useEffect } from "react";

function FetchDataTask() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, []);

  if (!post) return <p>Memuat data postingan...</p>;

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Fetch API</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default FetchDataTask;
