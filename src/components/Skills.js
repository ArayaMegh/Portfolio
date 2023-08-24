
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const skillsList = [
        { name: 'Soft skills', items: ["Travail en équipe"] },
        { name: 'Langages', items: ['JavaScript', 'Python'] },
        { name: 'Outils', items: ['VS Code', 'PyCharm', 'Git'] }
    ]

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Compétences
                            </h2>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                {
                                    skillsList.map((element, index) => {
                                        return (
                                            <div style={{ flex: 1 }}>
                                                <h3>{element.name}</h3>
                                                <div>
                                                    <p>{element.items.map((item, index) => {
                                                        return (<div>{item}</div>)
                                                    })}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}