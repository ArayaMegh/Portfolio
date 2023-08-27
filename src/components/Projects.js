import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/Pico-8.png';
import projImg2 from '../assets/img/Accueil.png';
import projImg3 from '../assets/img/Extension.png';
import projImg4 from '../assets/img/MySafePLace.png';
import projImg5 from '../assets/img/Antikea.png'
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from "react-on-screen";




export const Projects = () => {
    const projects = [
        {
            title: "Le poussin vengeur",
            description: "Jeu en Lua sur PICO-8",
            imgUrl: projImg1,
            projectUrl: "https://github.com/ArayaMegh/Projet-Collectif---Pico-8"
        },
        {
            title: "Travel",
            description: "Visualisation de données & API",
            imgUrl: projImg2,
            projectUrl: "https://github.com/ArayaMegh/projet-collectif---dataviz-api"
        },
        {
            title: "Don't be a crevette",
            description: "Extension de naviguation bien-être",
            imgUrl: projImg3,
            projectUrl: "https://github.com/ArayaMegh/projet-collectif--Don-t-be-a-crevette",
        },
        {
            title: "My Safe Place",
            description: "Réseau social safe & inclusif",
            imgUrl: projImg4,
            projectUrl: "https://github.com/ArayaMegh/Reseau-Social-PHP---Projet-Collectif"
        },
        {
            title: "Antikea",
            description: "Site e-commerce de ventes de meubles d'occasion",
            imgUrl: projImg5,
            projectUrl: "https://github.com/ArayaMegh/Projet-collectif---back-end-Antikea"
        },
    ];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projets</h2>
                                    <p>Projets effectués au sein de la formation "Concepteur•ice développeur•se de logiciels et d'applications", de l'école <a href="https://adatechschool.fr" style={{ textDecoration: 'none', color: 'pink' }}>Ada Tech School</a> à Nantes
                                        <br />
                                        <br />
                                        Ces projets ont été produits en équipe 🤝, en condition réelle 💼, avec les méthodes agiles ⚙️

                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}