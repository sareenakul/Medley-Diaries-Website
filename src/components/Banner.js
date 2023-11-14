import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import logo from "../Assets/img/logo.png";
import { useState, useEffect } from "react";

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
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to MedleyDiaries</span>
                        <h1>{`hi, I am a`}
                        <span className="wrap">{text}!</span>
                        </h1>
                        <p>MedleyDiaries has kept a record of the most amazing days of mine here in Canada</p>
                        <button className="button" onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={logo} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}