import React from "react";
import data from "./data.json";

function PostList() {
  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
