import React from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5825569/pexels-photo-5825569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption className="bg-light mb-3">
            <h1 className="text-dark">Welcome</h1>
            <h3 className="text-dark">We are happy that you are here.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4200747/pexels-photo-4200747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />

          <Carousel.Caption className="bg-light mb-3">
            <h1 className="text-dark">Feel free</h1>
            <h3 className="text-dark">We hope you can have fun with us.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4383295/pexels-photo-4383295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />

          <Carousel.Caption className="bg-light mb-3">
            <h1 className="text-dark">Just enjoy</h1>
            <h3 className="text-dark">
              We are always here for you, so never mind.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
