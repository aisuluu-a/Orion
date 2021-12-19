import { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./partners.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const imgSlides = [
  "https://softline.kg/uploads/resizer/images/09b0d5/9561b2/909b63/origin-mode2-170x80.png",
  "https://softline.kg/uploads/resizer/images/741075/9563de/474155/origin-mode2-170x80.png",
  "https://softline.kg/uploads/resizer/images/88e6d5/95640d/188ed0/origin-mode2-170x80.png",
  "https://softline.kg/uploads/resizer/images/67a1a5/7d27dc/467ade/origin-mode2-170x80.jpg",
];

class Partners extends Component {
  render() {
    return (
      <div className="partners">
        <h2>Наши партнеры</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img
              src="https://softline.kg/uploads/resizer/images/09b0d5/9561b2/909b63/origin-mode2-170x80.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://softline.kg/uploads/resizer/images/741075/9563de/474155/origin-mode2-170x80.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://softline.kg/uploads/resizer/images/88e6d5/95640d/188ed0/origin-mode2-170x80.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://softline.kg/uploads/resizer/images/67a1a5/7d27dc/467ade/origin-mode2-170x80.jpg"
              alt=""
            />
          </div>
        </Carousel>
        ;
      </div>
    );
  }
}

export default Partners;