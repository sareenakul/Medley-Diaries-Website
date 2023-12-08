import { useRef, useState } from "react";

const ReelVideo = ({fileName, title, width, height}) =>{
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

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

    const videoSource = require(`../Assets/reelvids/${fileName}`);
    return(
        <div className={`reel-video-container ${isPlaying ? 'playing' : ''}`}
        style={{ width, height }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <video className="reel-video" ref={videoRef} onEnded={handleVideoEnd} controls={isPlaying}>
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className="video-title">{title}</div>
        </div>
    );

}
export default ReelVideo;