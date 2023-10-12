import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating.js";
import "./Product.css";

export default function Product({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [ishovered, setIsHovered] = useState(false);

  return (
    <>
      <Card className="my-3" style={{ border: "none" }}>
        <div
          className="card-top"
          onMouseEnter={() => setIsHovered(!ishovered)}
          onMouseLeave={() => setIsHovered(!ishovered)}
        >
          <span
            className="heart-icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            {isWishlisted ? (
              <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
            ) : (
              <i className="fa-regular fa-heart" style={{ color: "white" }}></i>
            )}
          </span>
          <Card.Img src={product.image} variant="top" style = {{height : '13rem', borderRadius : "3px"}}/>
          {ishovered && <p className="view-product">VIEW PRODUCT</p>}
        </div>
        <Card.Body>
          <Card.Text as="div">
            <strong>{product.name}</strong>
          </Card.Text>
          <Card.Text as="div">
            <span className="price">₹{product.price}</span>
            <span className="discount-price">₹{product.discountedPrice}</span>
          </Card.Text>
          <Card.Text as="div">
            <Rating value={product.rating} text={` (${product.numReviews})`} />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
