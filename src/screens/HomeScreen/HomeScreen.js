import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../products.js";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
// import "./HomeScreen.scss";


export default function HomeScreen() {
  const [showTrendItems, setShowTrendItems] = useState(false);

  return (
    <div className="homescreen">
      <div className="contents">
        <input className="home_input"
          type="text"
          placeholder="Search"
          onClick={() => {
            setShowTrendItems(!showTrendItems);
          }}
        />
        {showTrendItems && (
          <div className="trend-items">
            <Row>
              <h4 className="mt-2">Latest Products</h4>
              {products.slice(0, 4).map((product) => (
                <Col key={product.id} sm="6" md="3">
                  <Link to="/products" style={{ textDecoration: "none" }}>
                    <Card
                      className="mb-3 mt-1"
                      style={{ border: "none", cursor: "pointer"}}
                    >
                      <Card.Img src={product.image} variant="top" style = {{borderRadius : '5px'}} />
                      <Card.Text as="div" style={{ fontSize: "0.7rem", marginTop : '10px' }}>
                        {product.name}
                      </Card.Text>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
}
