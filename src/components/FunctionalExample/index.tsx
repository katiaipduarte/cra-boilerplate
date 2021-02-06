import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Example } from "../../@types/Example";

const FunctionalExample = (): JSX.Element => {
  const [posts, setPosts] = useState<Example[]>([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response: AxiosResponse<Example[]>) => setPosts(response.data));
  }, []);

  return (
    <ul className="posts">
      {posts.map((post: Example) => (
        <li className="post" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default FunctionalExample;
