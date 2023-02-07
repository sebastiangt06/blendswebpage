import React from "react";
import { Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/12.jpg";
import meter2 from "../assets/img/22.jpg";
import meter3 from "../assets/img/3.jpg";
import meter4 from "../assets/img/4.jpg";
import meter6 from "../assets/img/ensalada.jpg";

export const SkillsHoverable = ({ handleMouseOver, handleMouseOut }) => {
  return (
    <section className="section">
      <div className="img-hov">
        <img loading="lazy" src={meter1} alt="" onMouseOut={handleMouseOut}  onMouseOver={handleMouseOver} />
        <div className="imghov-text">
          <h4>¡Nuestras bebidas!</h4>
          <p>Son las mas deliciosas</p>
        </div>
        </div>
      <div className="img-hov">
      <img loading="lazy" src={meter2} alt="" onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} ></img>
      <div className="imghov-text">
          <h4>Postres</h4>
          <p>Son las mas deliciosas</p>
        </div>
        </div>
        <div className="img-hov">
      <img loading="lazy" src={meter3}  alt="" onMouseOut={handleMouseOut}  onMouseOver={handleMouseOver}></img>
      <div className="imghov-text">
          <h4>Almuerzos</h4>
          <p>Son las mas deliciosas</p>
        </div>
        </div>
        <div className="img-hov">
      <img  loading="lazy" src={meter4}  alt=""   onMouseOut={handleMouseOut}  onMouseOver={handleMouseOver} ></img>
      <div className="imghov-text">
          <h4>Desayunos</h4>
          <p>Son las mas deliciosas</p>
        </div>
        </div>
      </section>
  );
};
