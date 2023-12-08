import { useRef } from "react";

const ReelVideo = ({videoFileName, width, height}) =>{
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
    // Reset the video when it reaches the end
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

    const videoSource = require(`../Assets/reelvids/${videoFileName}`);
    return(
        <div className="reel-video-container" style={{ width, height }}>
            <video className="reel-video" controls ref={videoRef} onEnded={handleVideoEnd}>
                <source src={videoSource} type="video/mp4" />
                Browser does not support this.
            </video>
        </div>
    );

}
export default ReelVideo;