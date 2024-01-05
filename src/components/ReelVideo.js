import { useRef, useState } from "react";


const ReelVideo = ({fileName, title, width, height, onVideoPlay}) =>{
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
    const videoSource = require(`../Assets/reelvids/${fileName}`);
    return(
      
        <div className={`reel-video-container ${isPlaying ? 'playing' : ''}`}
        style={{ width, height}}
        onClick={handleClick}>
            <video className="reel-video" ref={videoRef} onEnded={handleVideoEnd} controls={isPlaying}>
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className="video-title">{title}</div>
        </div>
      );
}
export default ReelVideo;