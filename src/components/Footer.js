import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/navIcon-github.svg';
import navIcon3 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center" style={{ paddingTop: 50 }}>

                    <Col sm={6}>

                    </Col>
                    <Col sm={6} className="text-center textg-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/meghan-grousset/" target="_blank"><img src={navIcon1} /></a>
                            <a href="https://github.com/ArayaMegh" target="_blank"><img src={navIcon2} /></a>
                            <a href="Meghan Grousset CV.pdf" download target="blank"><img src={navIcon3} alt='' /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}