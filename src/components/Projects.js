import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Reel from "./Reel";

const Projects = () =>{
    const ytprojects = [
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

    const igprojects = [
        {
            title: "Reel 8",
            description: "My 8th reel",
            url: "https://www.instagram.com/reel/CnqZh1zvjkU/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            title: "Reel 9",
            description: "My 9th reel",
            url: "https://www.instagram.com/reel/Ceu4Is5F5KX/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            
            title: "Reel 2",
            description: "My 2nd reel",
            url: "https://www.instagram.com/reel/CV_s9XGlqGw/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            title: "Reel 3",
            description: "My 3rd reel",
            url: "https://www.instagram.com/reel/CaXWlGSl9Mx/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            title: "Reel 1",
            description: "My 1st reel",
            url: "https://www.instagram.com/reel/CXwhetulmpT/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            title: "Reel 4",
            description: "My 4th reel",
            url: "https://www.instagram.com/reel/CaL35zGlb1d/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            title: "Reel 5",
            description: "My 5th reel",
            url: "https://www.instagram.com/reel/CYI_0otFq-f/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            title: "Reel 6",
            description: "My 6th reel",
            url: "https://www.instagram.com/reel/CWpFFVAFptm/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            title: "Reel 7",
            description: "My 7th reel",
            url: "https://www.instagram.com/reel/CuG3rjBNsyc/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            title: "",
            description: "",
            url: "",
        },
        {
            title: "Reel 10",
            description: "My 10th reel",
            url: "https://www.instagram.com/reel/CbQl9dqF45R/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
    ];


    return(
        <section className="project" id="projects">
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
                                    ytprojects.map((project, index) => {
                                    return(
                                        <ProjectCard key={index} {...project}/>
                                    )
                                })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        igprojects.map((reel, index) => {
                                            return(
                                                <Col key={index} sm={6} md={4}>
                                                    <Reel key={index} {...reel}/>
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