import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/guanabanazo.jpg";
import meter2 from "../assets/img/luladapro.jpg";
import meter3 from "../assets/img/smoothie1.jpg";
import meter4 from "../assets/img/granizadocafe.jpg";
import meter5 from "../assets/img/cafe.jpg";
import meter6 from "../assets/img/ensalada.jpg";
import colorSharp from "../assets/img/ensalada.png";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <section className="skill" id="skills">
    <div className="section">
      <img loading='lazy' src={meter1}></img>
      <img loading='lazy' src={meter2}></img>
      <img loading='lazy' src={meter3}></img>
      <img loading='lazy' src={meter4}></img>
      <img loading='lazy' src={meter5}></img>
    </div>
      <div className="skill-box">
      <h2 className="skill-header">Todo en un sabor divertido</h2>

        <Carousel fade={true}
          autoPlaySpeed={1000}
          autoPlay={false}
          responsive={responsive}
          infinite={true}
          className="skill-slider"
          nextIcon=''
        >
        
          <div className="item">
          
            <img className="meter1" src={meter1} alt="image"></img>
            <h5></h5>
          </div>
          <div className="item">
            <img src={meter2} alt="image"></img>
            <h5></h5>
          </div>
          <div className="item">
            <img src={meter3} alt="image"></img>
            <h5></h5>
          </div>
          <div className="item">
            <img src={meter4} alt="image"></img>
            <h5></h5>
          </div>
          <div className="item">
            <img src={meter6} alt="image"></img>
            <h5></h5>
          </div>
          <div className="item">
            <img src={meter5} alt="image"></img>
            <h5></h5>
          </div>
        </Carousel>
        
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
      {/* <Row>
                <Col>
                <div className="skill-box">
                <h2>Skills</h2>
                <p>I've had the opportunity to work with these technologies for full stack applications and web pages. SCRUM methodology was
                      one of the crucial parts to develop some projects with a team so i'm very
                      familiar with this agile methodology and also with the teamwork
                      that this entails.</p>
               
                </div>
                </Col>
            </Row> */}
    </section>
  );
};