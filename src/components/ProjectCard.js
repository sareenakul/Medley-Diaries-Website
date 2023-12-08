import { Col } from "react-bootstrap"
import { useState } from "react";


const ProjectCard = ({title, description, url, onVideoPlay}) =>{
    const [isPlaying, setIsPlaying] = useState(false);


const opts = {
    height: "390",
    width: "640",
    playerVars: {
        autoplay: 0,
    },
}

const onPlay = () => {
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
  };

  const onEnd = () => {
    setIsPlaying(false);
  };
    return(
        <Col sm={6} md={4}>
            <div className={`proj-imgbx ${isPlaying ? 'playing' : ''}`}>
            <div className="ratio ratio-16x9">
                <iframe src={url} title={title} opts={opts} onPlay={onPlay} onPause={onPause} onEnd={onEnd} allowFullScreen></iframe>
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