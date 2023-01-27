import React from "react";
import { Row, Col } from "react-bootstrap";
import "animate.css";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import bannerimg from "../assets/img/bannerimg.png";
import meter1 from "../assets/img/bannerblends12.jpg";
import meter2 from "../assets/img/bannerblends23.jpg";
import meter3 from "../assets/img/bannerblends32.jpg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const Banner = () => {

  const images = [meter1, meter2, meter3];

  const animation = { duration: 6000, easing: (t) => t };
  const [opacities, setOpacities] = React.useState([]);

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  return (
    <Router>
      <div ref={sliderRef} className="fader">
        {images.map((src, index) => (
          <div
            key={index}
            className="fader__slide"
            style={{ opacity: opacities[index] }}
          >
            <img src={src} alt=''></img>
          </div>
        ))}
        <section className="banner" id="home">
            <Row className="align-items-center ">
              <Col xs={12} md={6} xl={7} className='bannerimg-parent'>
                <div className="bannerimg">
                  <img src={bannerimg} alt=""></img>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5} className='headerimg-parent'>                 
                      <img className="imgheader" src={bannerimg} alt="" />
              </Col>
            </Row>
        </section>
      </div>
    </Router>
  );
};
