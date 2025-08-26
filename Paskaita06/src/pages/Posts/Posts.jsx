import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(POST_ENDPOINT)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2 onClick={() => navigate(`/posts/${post.id}`)}>{post.title}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Posts;
