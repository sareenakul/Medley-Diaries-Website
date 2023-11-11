import React from "react"
import home from "../Assets/img/vids/home.mp4"
const Main = ()=>{
    return(
        <div className="main" style={{ width: '100%', height: 'auto' }}>
            <div className="overlay"></div>
            <video src={home} autoPlay loop muted style={{ width: '100%', height: 'auto' }}/>
            <div className="content">
                <h1>Medley Diaries</h1>
            </div>
        </div>
    )
}

export default Main