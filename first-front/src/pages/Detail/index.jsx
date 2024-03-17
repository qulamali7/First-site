import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  async function GetFetch() {
    try {
      const res = await fetch("http://localhost:3100/product/" + id);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);

  
  return (
    <section id="detail">
      <div className="detail_content">
        <div>
          <img src={data.img} alt="" />
        </div>
        <div>
          <h4>{data.name}</h4>
          <p>{data.category}</p>
          <span>{data.price}$</span>
        </div>
      </div>
    </section>
  );
};

export default Detail;
