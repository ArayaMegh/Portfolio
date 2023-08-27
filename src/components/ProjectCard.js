import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img style={{
                    objectFit: 'cover',
                    height: 220
                }}
                    src={imgUrl} />
                <a className="proj-txtx" href={projectUrl}>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </a>
            </div>
        </Col>
    )
}