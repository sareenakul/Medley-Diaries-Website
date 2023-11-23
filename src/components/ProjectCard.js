import { Col } from "react-bootstrap"

const opts = {
    height: "390",
    width: "640",
    playerVars: {
        autoplay: 1,
    },
}

const ProjectCard = ({title, description, url}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <div className="ratio ratio-16x9">
                <iframe src={url} title={title} opts={opts} allowFullScreen></iframe>
            </div>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}


export default ProjectCard;