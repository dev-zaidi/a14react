import React from "react";
import { Data } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Cards from "../../Cards/Cards";

const Products = () => {
  const navigate=useNavigate();
 
  return (
    <>
      <div className=" d-flex flex-wrap justify-content-around">
        {Data &&
          Data.map((e, i) => {
            return (
              <div key={i} className="m-1" style={{border:"1px solid grey", width:"240px", textAlign:"center"}}>
                <Cards title={e.title.slice(0,20)} description={e.description.slice(0,89)} image={e.image} category={e.category} price={e.price} rating={e.rating} />
                <button className="btn btn-outline-secondary" onClick={()=>{navigate(`/products/${e.id}`)}}>View</button>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Products;
