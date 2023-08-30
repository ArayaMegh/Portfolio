import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import fox from "../assets/img/fox.png"
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Apprentie developpeuse", "Fox loveuse", "Main verte"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 5000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }
    const sendMail = () => {
        window.location = "mailto:megh.g@hotmail.fr"
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Bienvenue sur mon Portfolio</span>
                                    <h1>{"Bonjour ! Je suis Meghan :   "}<span className="wrap">{text}</span></h1>
                                    <p>
                                        <b> 📣 A la recherche d'une alternance !</b>

                                        <ul>
                                            <li> A partir d'octobre 2023 jusqu'à novembre 2024</li>
                                            <li> Pour me préparer à un titre RNCP niveau 6 (bac + 3)</li>
                                            <li> 4 jours par semaine (lundi au jeudi)</li>
                                        </ul>

                                    </p>
                                    <button onClick={() => sendMail()}>Contactez-moi !<ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={fox} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
