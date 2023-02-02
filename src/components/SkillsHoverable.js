import React from "react";
import { Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/guanabanazo.jpg";
import meter2 from "../assets/img/luladapro.jpg";
import meter3 from "../assets/img/smoothie1.jpg";
import meter4 from "../assets/img/granizadocafe.jpg";
import meter5 from "../assets/img/cafe.jpg";
import meter6 from "../assets/img/ensalada.jpg";

export const SkillsHoverable = ({ handleMouseOver, handleMouseOut }) => {
  return (
    <div className="section">
      <div className="img-hov">
        <img loading="lazy" src={meter1} alt="" onMouseOut={handleMouseOut}  onMouseOver={handleMouseOver}/>
        <div className="imghov-text">
          <h4>1</h4>
        </div>
        </div>
      <div className="img-hov">
      <img loading="lazy" src={meter2} alt="" onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} ></img>
      <div className="imghov-text">
          <h4>2</h4>
        </div>
        </div>
        <div className="img-hov">
      <img loading="lazy" src={meter3}  alt="" onMouseOut={handleMouseOut}  onMouseOver={handleMouseOver}></img>
      <div className="imghov-text">
          <h4>3</h4>
        </div>
        </div>
        <div className="img-hov">
      <img  loading="lazy" src={meter4}  alt=""   onMouseOut={handleMouseOut}  onMouseOver={handleMouseOver} ></img>
      <div className="imghov-text">
          <h4>4</h4>
        </div>
        </div>
        <div className="img-hov">
      <img
        loading="lazy"
        src={meter5}
        alt=""
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      ></img>
      <div className="imghov-text">
          <h4>5</h4>
        </div>
        </div>
      </div>
  );
};
