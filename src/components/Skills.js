import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const skillsList = [
        { name: '🤝 Soft skills', items: ["Travail en équipe", "Empathie", "Patience", "Curiosité", "Adaptabilité", "Discrétion"] },
        { name: '💻 Langages', items: ['React JS', 'Laravel', 'JavaScript', 'Python', 'PHP', 'Tailwind', 'HTML', 'CSS', "Kotlin (en cours)", 'GO (bientôt)'] },
        { name: '📚 Frameworks', items: ['React JS', 'Laravel', 'Tailwind', 'Bootstrap', 'Node JS', 'Express JS'] },
        { name: '⚙️ Méthodologie', items: ['Agile', 'Kanban', 'Scrum'] },
        { name: '🛠️ Outils', items: ['VS Code', 'PyCharm', 'Docker', 'Git', 'Github', 'Slack', "Terminal Unix", "Trello", "White board"] }
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
                                        <h3>{element.name}</h3>
                                        <div>
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
