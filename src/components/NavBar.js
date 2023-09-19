import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/navIcon-github.svg';
import navIcon3 from '../assets/img/nav-icon4.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const sendMail = () => {
        window.location = "mailto:megh.g@hotmail.fr"
    }
    return (
        < Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("home")}>Accueil</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("skills")}>Compétences</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("projects")}>Projets</Nav.Link>

                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/meghan-grousset/" target="_blank"><img src={navIcon1} alt="Icone Linkedin" /></a>
                            <a href="https://github.com/ArayaMegh" target="_blank"><img src={navIcon2} alt="Icone github" /></a>
                            <a href="Meghan Grousset CV.pdf" target="blank"><img src={navIcon3} alt='Icone download CV' /></a>

                        </div>
                        <button className="vvd" onClick={() => sendMail()}><span>Contact</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )


}
