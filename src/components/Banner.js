import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import logo from "../Assets/img/logo.png";
import curveText from "../Assets/img/curveText.png";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export const Banner =()=>{
    const [loopNum, setLoopNum] = useState(0);
    const [isRemoved, setIsRemoved] = useState(false);
    const role = [" Developer", " Content Creator", " Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta);

        return()=>{clearInterval(ticker)};
    }, [text, delta])

    const tick = ()=>{
        let i = loopNum % role.length;
        let fullText = role[i];
        let updatedText = isRemoved ? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1);
        setText(updatedText);

        if(isRemoved){
            setDelta(prevDelta => prevDelta/10);
        }

        if(!isRemoved && updatedText === fullText){
            setIsRemoved(true);
            setDelta(period);
        } else if(isRemoved && updatedText === ''){
            setIsRemoved(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }

    };
    return(
        <section className="banner" id="home">
            <Container className="rabbi">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="hii">{`hi, I am a`}
                        <span className="wrap">{text}!</span>
                        </h1>
                        <p><b>Welcome to MedleyDiaries~</b> my entertaining vlog portfolio</p>
                        <Link to="contact" spy={true} smooth={true} duration={500}>
                            <button className="button" onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={curveText} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}