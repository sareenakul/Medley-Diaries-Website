import YouTube from "react-youtube"
import { Col } from "react-bootstrap"

const ProjectCard = ({title, description, url}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <YouTube videoId={url}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}