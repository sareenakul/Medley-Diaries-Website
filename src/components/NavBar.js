import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
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
            <img src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522m%2Blogo%2522&psig=AOvVaw2jN_NNr_58eQhk0kswJAu8&ust=1699597138418000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLjnj_OitoIDFQAAAAAdAAAAABAE'} alt="Medley Diaries Icon"/>
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
                    <img src={'https://www.pngwing.com/en/search?q=INSTAGRAM'} alt="Instagram Icon"/>
                </a>
                <a href="https://ca.linkedin.com/in/akul-sareen-7a7501223" target="_blank" rel="noopener noreferrer">
                    <img src={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.svgrepo.com%2Fshow%2F144030%2Flinkedin-square-logo.svg&tbnid=B9-ptCL3QEfN2M&vet=12ahUKEwj2jpX4obaCAxWNGGIAHZaQBykQMygLegUIARCAAQ..i&imgrefurl=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F144030%2Flinkedin-square-logo&docid=JbKmgBbaZazxRM&w=800&h=800&q=linkedin%20logo&ved=2ahUKEwj2jpX4obaCAxWNGGIAHZaQBykQMygLegUIARCAAQ'} alt="LinkedIn Icon"/>
                </a>
                <a href="https://www.youtube.com/@MedleyDiaries" target="_blank" rel="noopener noreferrer">
                    <img src={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F48%2F48968.png&tbnid=idfsC_Gu3iZLVM&vet=12ahUKEwj5xdHIoraCAxVfElkFHWgXBX4QMygKegUIARCDAQ..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fyoutube-symbol_48968&docid=gggbAFYUlOFa_M&w=512&h=512&q=youtube%20logo&ved=2ahUKEwj5xdHIoraCAxVfElkFHWgXBX4QMygKegUIARCDAQ'} alt="YouTube Icon"/>
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