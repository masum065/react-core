import React, { useState, useEffect } from "react";
import SinglePost from "./singleData";

class PostData extends React.Component {
  render() {
    return (
      <div className="mt-4">
        <h3>Hi Form React</h3>

        <LoadData />
      </div>
    );
  }
}

function LoadData() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <SinglePost title={post.title} post={post.body} />
        ))}
      </div>
    </div>
  );
}

export default PostData;
