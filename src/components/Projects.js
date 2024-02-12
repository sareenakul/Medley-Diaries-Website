import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ReelVideo from "./ReelVideo";
import { useRef } from "react";

const Projects = () =>{
    const ytprojects = [
        {
            title: "Landing Canada",
            description: "My 1st vlog in Canada",
            url: "https://www.youtube.com/embed/FAxgVkG4hMM?si=hwddnaRefrLbvcax",
        },
        { 
            title: "Montreal",
            description: "My 2nd vlog in Canada",
            url: "https://www.youtube.com/embed/K3uhiGc9Fu0?si=A6hlhnj8wa68029A",
        },
        {
            title: "Winters",
            description: "My 3rd vlog in Canada",
            url: "https://www.youtube.com/embed/xfisM-u78HE?si=QVDfB89BPa9EGcKP",
        },
        {
            title: "Toronto",
            description: "My 4th vlog in Canada",
            url: "https://www.youtube.com/embed/C2CkV3NzJEs?si=KYpM5pBSIXCCBlS3",
        },
        {
            title: "Downtown",
            description: "My 5th vlog in Canada",
            url: "https://www.youtube.com/embed/v1oS9Su_kcc?si=5TzGLph1plwgMA9s",
        },
        {
            title: "Quebeć",
            description: "My 6th vlog in Canada",
            url: "https://www.youtube.com/embed/t1hEpYHdH2I?si=N_ldsevm4Uk9pRlH",
        },
    ];
    const volprojects = [
        {
            title: "Feeling Called Mayo",
            description: "Hyperlapse of Mayo College",
            url: "https://www.youtube.com/embed/XmZegflEZhk?si=98Pe8bzr97vrM_p4",
        },
        {
            title: "Medley",
            description: "My first Medley",
            url: "https://www.youtube.com/embed/VOcfRQkcOCk?si=a1U6p0g1wQ9j1y08",
        },
        {
            title: "Jiye Kyon",
            description: "A song close to my heart <3",
            url: "https://www.youtube.com/embed/4C9Pqx4GBVM?si=YWnV7xZryRae0e7V",
        },
        {
            title: "",
            description: "",
            url: "",
        },
        {
            title: "Teri Mitti",
            description: "A tribute to my country",
            url: "https://www.youtube.com/embed/JuYODdv6uiY?si=k7rmJ0bEnRa5WCfl",
        },
    ];

    const videoFileNames = [
        { fileName: 'igvid1.mp4', title: 'Video 1' },
        { fileName: 'igvid2.mp4', title: 'Video 2' },
        { fileName: 'igvid3.mp4', title: 'Video 3' },
        { fileName: 'igvid4.mp4', title: 'Video 4' },
        { fileName: 'igvid5.mp4', title: 'Video 5' },
        { fileName: 'igvid6.mp4', title: 'Video 6' },
        { fileName: 'igvid7.mp4', title: 'Video 7' },
        { fileName: 'igvid8.mp4', title: 'Video 8' },
        { fileName: 'igvid9.mp4', title: 'Video 9' }
    ];
    const currentVideoRef = useRef(null);
    const handleVideoPlay = (videoRef) => {
        // Pause the currently playing video if there is one
        if (currentVideoRef.current && currentVideoRef.current !== videoRef.current) {
            currentVideoRef.current.pause();
            currentVideoRef.current.currentTime = 0;
          }
        // Update the reference to the currently playing video
        currentVideoRef.current = videoRef.current;
      };
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>V-Logs</h2>
                        <p>Journey through my Vlogs</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first"><b>VLOGS 🕰️</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><b>SHORTS 🩳</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><b>🎤 / 📸</b></Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                {
                                    ytprojects.map((project, index) => {
                                    return(
                                        <ProjectCard key={index} {...project} onVideoPlay={handleVideoPlay}/>
                                    )
                                })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {videoFileNames.map((videoFileName, index) => {
                                            return(
                                                <Col key={index} sm={6} md={4} lg={4}>
                                                    <ReelVideo key={index} {...videoFileName} onVideoPlay={handleVideoPlay}/>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        volprojects.map((vid, index) => {
                                            return(
                                                <ProjectCard key={index} {...vid}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Projects;