import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import igg from '../Assets/img/igg.png';
import ln from '../Assets/img/ln.png';
import ytl from '../Assets/img/ytl.png';
import MDlogo from '../Assets/MDlogo.png';
export const NavBar = () =>{
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return()=> window.removeEventListener("scroll", onScroll);
    },[])

    const updateActiveLink = (value) =>{
        setActiveLink(value);
    }
    return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container className="Navbar-container">
        <Navbar.Brand href="#home">
            <img src={MDlogo} alt="Medley Diaries Icon" className="medley-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'} onClick={()=> updateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick={()=> updateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link' : 'navbar-link'} onClick={()=> updateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.instagram.com/medleydiaries/" target="_blank" rel="noopener noreferrer">
                    <img src={igg} alt="Instagram Icon" className="social-icon-img"/>
                </a>
                <a href="https://ca.linkedin.com/in/akul-sareen-7a7501223" target="_blank" rel="noopener noreferrer">
                    <img src={ln} alt="LinkedIn Icon" className="social-icon-img"/>
                </a>
                <a href="https://www.youtube.com/@MedleyDiaries" target="_blank" rel="noopener noreferrer">
                    <img src={ytl} alt="YouTube Icon" className="social-icon-img"/>
                </a>
            </div>
            <button className="vvd" onClick={()=> console.log('connect')}>
                <span>🔗Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}