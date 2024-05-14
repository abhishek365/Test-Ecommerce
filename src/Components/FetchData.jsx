import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const intialState = {
  loading: true,
  post: {},
  error: "",
};

const reduce = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      break;
  }
};

function FetchData() {
    const [posts, dispatch] = useReducer(reduce, intialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({type:"FETCH_SUCCESS", payload: response.data})
      })
      .catch((error) => {
        dispatch({type:"FETCH_ERROR", payload: error})
      });
  }, []);
  return (
    <h1>
      {posts.loading ? "Loading" : posts.post.title}
      {posts.error ? posts.error : null}
    </h1>
  );
}

export default FetchData;
