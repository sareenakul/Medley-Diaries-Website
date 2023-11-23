import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Main from "./Main";

const Projects = () =>{
    const projects = [
        {
            title: "Vlog 01",
            description: "My 1st vlog in Canada",
            url: "https://www.youtube.com/embed/FAxgVkG4hMM?si=hwddnaRefrLbvcax",
        },
        {
            
            title: "Vlog 02",
            description: "My 2nd vlog in Canada",
            url: "https://www.youtube.com/embed/K3uhiGc9Fu0?si=A6hlhnj8wa68029A",
        },
        {
            title: "Vlog 03",
            description: "My 3rd vlog in Canada",
            url: "https://www.youtube.com/embed/xfisM-u78HE?si=QVDfB89BPa9EGcKP",
        },
        {
            title: "Vlog 04",
            description: "My 4th vlog in Canada",
            url: "https://www.youtube.com/embed/C2CkV3NzJEs?si=KYpM5pBSIXCCBlS3",
        },
        {
            title: "Vlog 05",
            description: "My 5th vlog in Canada",
            url: "https://www.youtube.com/embed/v1oS9Su_kcc?si=5TzGLph1plwgMA9s",
        },
        {
            title: "Vlog 06",
            description: "My 6th vlog in Canada",
            url: "https://www.youtube.com/embed/t1hEpYHdH2I?si=N_ldsevm4Uk9pRlH",
        },
    ];


    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>All my youtube content that makes me relevant today</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                {
                                    projects.map((project, index) => {
                                    return(
                                        <ProjectCard key={index} {...project}/>
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
            <Main className="background-image-right"></Main>
        </section>
    )
}
export default Projects;