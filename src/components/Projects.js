import { Container, Row, Col, Tabs, Tab} from "react-bootstrap";
import YouTube from "react-youtube";

const Projects = () =>{
    const projects = [
        {
            title: "Vlog 01",
            description: "My 1st vlog in Canada",
            url: "https://www.youtube.com/watch?v=FAxgVkG4hMM&t=267s",
        },
        {
            title: "Vlog 02",
            description: "My 2nd vlog in Canada",
            url: "https://www.youtube.com/watch?v=K3uhiGc9Fu0&t=240s",
        },
        {
            title: "Vlog 03",
            description: "My 3rd vlog in Canada",
            url: "https://www.youtube.com/watch?v=xfisM-u78HE&t=73s",
        },
        {
            title: "Vlog 04",
            description: "My 4th vlog in Canada",
            url: "https://www.youtube.com/watch?v=C2CkV3NzJEs",
        },
        {
            title: "Vlog 05",
            description: "My 5th vlog in Canada",
            url: "https://www.youtube.com/watch?v=v1oS9Su_kcc&t=64s",
        },
        {
            title: "Vlog 06",
            description: "My 6th vlog in Canada",
            url: "https://www.youtube.com/watch?v=t1hEpYHdH2I&t=2s",
        },
    ];

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 0,
        },
    }

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>All my youtube content that makes me relevant today</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="first" title="Tab One">
                            Tab One
                            </Tab>
                            <Tab eventKey="second" title="Tab Two">
                            Tab Two
                            </Tab>
                            <Tab eventKey="third" title="Tab Three">
                            Tab Three
                            </Tab>
                        </Tabs>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                {
                                    projects.map((project, index) => {
                                    return(
                                        <p>{project.title}</p>
                                    )
                                })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                            <Tab.Pane eventKey="third"></Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Projects;