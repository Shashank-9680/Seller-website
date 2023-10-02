// CarCard.js
import Button from "react-bootstrap/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { BsPeopleFill, BsSpeedometer } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { RiFridgeLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import "./CarCard.css";
const CarCard = ({ car }) => {
  if (!car) {
    return null; // or some default content or error message
  }

  return (
    <Col md={4} key={car.id}>
      <Card style={{ marginBottom: "20px" }}>
        <Card.Img variant="top" src={car.url} height={"300px"} />
        <Card.Body>
          <div className="name-date">
            <Card.Title>{car.make}</Card.Title>
            <Card.Title className="title">2021</Card.Title>
          </div>
          <div className="info-container">
            <div className="people-petrol">
              <div className="people">
                {" "}
                <BsPeopleFill color="#87CEEB"></BsPeopleFill> 4 people
              </div>
              <div className="petrol">
                <RiFridgeLine color="#87CEEB"></RiFridgeLine> hybrid
              </div>
            </div>
            <div className="km-auto">
              <div className="km">
                <BsSpeedometer color="#87CEEB"></BsSpeedometer> 6.1km/1-litre
              </div>
              <div className="auto">
                <GiSteeringWheel color="#87CEEB"></GiSteeringWheel> Automatic
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="price-rent">
            <Card.Title>$440 /month</Card.Title>
            <div className="icon-rent">
              {" "}
              <div className="heart-icon">
                <AiOutlineHeart color="#87CEEB"></AiOutlineHeart>
              </div>
              <Button variant="primary">Rent Now</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CarCard;
