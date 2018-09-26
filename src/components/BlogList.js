import React from "react";

const BlogList = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p><i>Writer :</i>{props.author}</p>
    </div>
  )
};

export default BlogList;
