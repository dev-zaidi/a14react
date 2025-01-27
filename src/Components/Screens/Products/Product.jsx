import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleData from "../../Cards/SingleData";

const Product = () => {
  const { id } = useParams();
  const productDetails = Data.filter((e) => {
    return id == e.id;
  });

  return (
    <>
      {productDetails &&
        productDetails.map((e, i) => {
          return (
            <div className="m-1 p-3" key={i}>
              <SingleData
                title={e.title}
                description={e.description}
                price={e.price}
                rating={e.rating.rate}
                image={e.image}
                category={e.category}
              />
            </div>
          );
        })}
    </>
  );
};

export default Product;
