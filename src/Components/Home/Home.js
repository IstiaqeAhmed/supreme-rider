import React from "react";
import { Carousel } from "react-bootstrap";
import places from "../FakeData/Places";
import Header from "../Header/Header";
import Places from "../Places/Places";

const Home = () => {
  return (
    <div className="background">
      <Header></Header>

      <div className="row" style={{ padding: "10px" }}>
        <div className="col-md-5">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={places[0].image}
                alt="Bus"
              />
              <Carousel.Caption>
                <h3>{places[0].name}</h3>
                <p>{places[0].about}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={places[1].image}
                alt="Bike"
              />
              <Carousel.Caption>
                <h3>{places[1].name}</h3>
                <p>{places[1].about}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={places[2].image}
                alt="Bus"
              />
              <Carousel.Caption>
                <h3>{places[2].name}</h3>
                <p>{places[2].about}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={places[3].image}
                alt="Bus"
              />
              <Carousel.Caption>
                <h3>{places[3].name}</h3>
                <p>{places[3].about}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-7">
          <Places></Places>
        </div>
      </div>
    </div>
  );
};

export default Home;
