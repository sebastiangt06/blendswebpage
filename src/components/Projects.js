import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2-copia.png";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/appcostos.jpg";
import projImg3 from "../assets/img/workprogress3.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const teamProjects = [
    {
      title: "Warbug Aplicacion de ingresos y egresos",
      description:
        "Aplicacion que lista los ingresos y egresos de una empresa, protegido con sistema de login, ideal para administradores y usuarios",
      imgUrl: projImg2,
      gitUrl: "https://github.com/Warbug-MisionTic/Warbug",
      projUrl: "",
    },
    {
      title: "Warbug Store Ecommerce",
      description:
        "Tienda Ecommerce, desarrollada para la venta de articulos tecnologicos, protegida con sistema de login, sistema de administrador que permite ver las ventas hechas y su suma total",
      imgUrl: projImg1,
      gitUrl: "https://github.com/Warbug-MisionTic/DesarrolloWeb-Ciclo4",
      projUrl: "",
    },
    
  ];
  const ownProjects = [
    {
      title: "Calculadora de emisiones GEI",
      description:
        "Calculadora de emisiones de gases de efecto invernadero, dirigida a personas que deseen saber cuantas emisiones generan dia a dia",
      imgUrl: projImg3,
      gitUrl: "",
      projUrl: "",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    As a junior web developer, i have been focus on both, web
                    pages and applications, using for the Front-end JavaScript
                    programming language, React.Js framework, HTML, and CSS with
                    Bootstrap. All of this it wouldn't be possible without using
                    Node.Js with Express.Js framework to work on the SSR and
                    handle HTTP requests (CRUD) while interacting with the
                    database (MongoDB). Furthermore, i had the opportunity to
                    participate as a developer on the project 'Warbug aplicacion
                    de ingresos y egresos', which has Java with springboot as a
                    tecnologie for the backend and Java-Thymeleaf with HTML and
                    CSS for the frontend.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="second">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                      fill='true' justify='true'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Own Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Made it with a team</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>These are the projects that i made by my own, i used React Js, HTML5, JavaScript, CSS Bootstrap and NodeJs .</p>
                        <Row className="cards-container">
                          {ownProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>These academic projects were made it by a team in MisionTic 2022 where i was a  full stack developer, we use different tecnologies as React Js, Node Js, Java Springboot, Java Thymeleaf and others.</p>
                        <Row className="cards-container">
                          {teamProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
