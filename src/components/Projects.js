import { Container, Row, Col } from "react-bootstrap";

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
    ]

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Random text that describes my projects and the work I have contributed for</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Projects;