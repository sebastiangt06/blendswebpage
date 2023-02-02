import React from "react";
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
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { SkillsHoverable } from "./SkillsHoverable";
import { Skilltext } from "./Skilltext";

export const Skills = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section className="skill" id="skills">
      <div className="skill-box">
        <h2 className="skill-header">Todo en un sabor divertido</h2>
        <div>
          <SkillsHoverable
            handleMouseOut={handleMouseOut}
            handleMouseOver={handleMouseOver}/>
{/*             <div>{isHovering && <Skilltext />}</div>
 */}            
        </div>
      </div>
    </section>
  );
};
