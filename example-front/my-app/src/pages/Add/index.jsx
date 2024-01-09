import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "" && img !== "" && category !== "" && price !== "") {
      fetch("http://localhost:3100/product", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ img, name, category, price }),
      }).then((x) => navigate("/"));
    } else {
        navigate("/")
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>add</button>
      </form>
    </>
  );
};

export default Add;
