import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState();
  // Fetch example
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // --------------
    // const fetchPosts = async () => {
    //   const response = await axios.get(API_URL);
    //   setPosts(response.data);
    // }

    // fetchPosts();
  }, []);

  return (
    <div>
      {posts ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Posts;
