import { Col } from "react-bootstrap";

const Reel = () =>{
    const opts = {
        height: "640",
        width: "390",
        playerVars: {
            autoplay: 0,
        },
    }
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx"></div>
        </Col>
    );
};

export default Reel;