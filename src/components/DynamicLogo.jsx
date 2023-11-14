import React, { useState, useEffect } from 'react';

const DynamicLogo = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isRemoved, setIsRemoved] = useState(false);
    const role = ["My", "Medley"];
    const [typedText, setTypedText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta);

        return()=>{clearInterval(ticker)};
    }, [typedText, delta])

    const tick = ()=>{
        let i = loopNum % role.length;
        let fullText = role[i];
        let updatedText = isRemoved ? fullText.substring(0, typedText.length-1): fullText.substring(0, typedText.length+1);
        setTypedText(updatedText);

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
  
    return (
      <div>
        <h1>{typedText}Diaries</h1>
      </div>
    );
};

export default DynamicLogo;