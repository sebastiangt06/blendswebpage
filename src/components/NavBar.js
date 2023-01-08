import {Navbar, Nav, Container} from "react-bootstrap";
import { useState, useEffect } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon4.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import logo from '../assets/img/logoblends2.png'
import {HashLink} from 'react-router-hash-link';
import {BrowserRouter as Router} from 'react-router-dom';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onscroll = ()=>{
      if(window.scrollY >50){
          setScrolled(true);
      }else{
          setScrolled(false);
      }
    }

    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll)
      
    }, [])
    
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    } 
  return (
    <Router>
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand  href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Nosotros</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActiveLink('skills')}>Productos</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActiveLink('projects')}>Encuentranos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sebastiangpg/">
                <img src={navIcon1} alt=""></img>
              </a>
              <a  href="https://github.com/sebastiangt06">
                <img src={navIcon2} alt=""></img>
              </a>
              <a href="https://www.instagram.com/sebastiangt06/">
                <img src={navIcon3} alt=""></img>
              </a>
            </div>
            <HashLink to='#connect'>
            <button className="vvd">
              <span>¡Contactanos!</span>
            </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  );
};
