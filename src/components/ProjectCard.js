import { Col } from "react-bootstrap"
import { useState, useRef } from "react";
const ProjectCard = ({title, description, url, onVideoPlay}) =>{
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoEnd = () => {
        // Reset the video when it reaches the end
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        setIsPlaying(false);
      };
      const handleClick = () => {
        if (!isPlaying) {
          onVideoPlay(videoRef); // Notify the parent component about the currently playing video
        }
        setIsPlaying(!isPlaying);
      };
    return(
        <Col sm={6} md={4} onClick={handleClick}>
            <div className={`proj-imgbx ${isPlaying ? 'playing' : ''}`}>
            <div className="ratio ratio-16x9">
                <iframe src={url} title={title} width="640" height="390" frameBorder="0" allowFullScreen onClick={handleClick} onEnded={handleVideoEnd} ref={videoRef}></iframe>
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