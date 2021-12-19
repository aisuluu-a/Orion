import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import sliImg from "./assets/sli.jpg";
import slidImg from "./assets/slid.jpg";
import slideImg from "./assets/slide.jpg";

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={ sliImg }
                        alt="sli"
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ slidImg }
                        alt="slid"
                    />
                    <Carousel.Caption>
                        <h3>Second slide</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ slideImg }
                        alt="slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}