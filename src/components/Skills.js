import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const skillsList = [
        { symbol: '🤝', name: 'Soft skills', items: ["Travail en équipe", "Empathie", "Patience", "Curiosité", "Adaptabilité", "Discrétion"] },
        { symbol: '💻', name: 'Langages', items: ['JavaScript', 'Python', 'PHP', 'HTML', 'CSS', "Kotlin (en cours)", 'GO (bientôt)'] },
        { symbol: '📚', name: 'Frameworks', items: ['React JS', 'Laravel', 'Tailwind', 'Bootstrap', 'Node JS', 'Express JS'] },
        { symbol: '⚙️', name: 'Méthodologie', items: ['Agile', 'Kanban', 'Scrum'] },
        { symbol: '🛠️', name: 'Outils', items: ['VS Code', 'PyCharm', 'Docker', 'Git', 'Github', 'Slack', "Terminal Unix", "Trello", "Android Studio Jetpack Compose"] }
    ]

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="skill-bx">
                            <h2>Compétences</h2>
                            <div className="skills-grid">
                                {skillsList.map((element, index) => (
                                    <div key={index} className="skill-item">
                                        <h3>{element.symbol}<br />{element.name}</h3>
                                        <div style={{ marginTop: 30 }}>
                                            {element.items.map((item, index) => (
                                                <p key={index}>{item}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};
