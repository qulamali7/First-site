import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
const ProductsCards = () => {
  const [data, setData] = useState(null);
  async function GetFetch() {
    try {
      const res = await fetch("http://localhost:3100/product");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);

  function deleteProduct(id) {
    fetch("http://localhost:3100/product/" + id, {
      method: "DELETE",
    })
    .then(x=>GetFetch())
  }

  return (
    <>
      <div className="products_cards">
        {data &&
          data.map((x) => (
            <div className="products_card">
              <Link to={"/detail/" + x._id}>
                <div className="card_img">
                  <img src={x.img} alt="" />
                </div>
                <div className="card_content">
                  <h4>{x.name}</h4>
                  <p>{x.category}</p>
                  <span>{x.price}$</span>
                </div>
              </Link>
              <button onClick={() => deleteProduct(x._id)}>delete</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductsCards;
