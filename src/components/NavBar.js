import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../Assets/img/logo.png';
import iglogo from '../Assets/img/iglogo.png';
import linkedinlogo from '../Assets/img/linkedinlogo.png';
import ytlogo from '../Assets/img/ytlogo.png';
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
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Medley Diaries Icon"/>
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
                    <img src={iglogo} alt="Instagram Icon"/>
                </a>
                <a href="https://ca.linkedin.com/in/akul-sareen-7a7501223" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinlogo} alt="LinkedIn Icon"/>
                </a>
                <a href="https://www.youtube.com/@MedleyDiaries" target="_blank" rel="noopener noreferrer">
                    <img src={ytlogo} alt="YouTube Icon"/>
                </a>
            </div>
            <button className="vvd" onClick={()=> console.log('connect')}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}