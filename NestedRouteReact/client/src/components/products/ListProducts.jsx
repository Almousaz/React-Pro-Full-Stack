
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductsData from "../../ProductData";
function ListProducts() {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {ProductsData.map((product) => {
          return (
            <div
              className="productDisplay"
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <h1>{product.name}</h1> <p>{product.description}</p>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProducts;