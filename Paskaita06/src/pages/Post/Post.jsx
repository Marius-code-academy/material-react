import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

function Post() {
  const [post, setPost] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(POST_ENDPOINT + "/" + params.id)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>
        {post.userId} {post.id}
      </p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Post;
