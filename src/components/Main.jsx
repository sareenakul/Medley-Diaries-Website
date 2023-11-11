import React from "react"
import home from "../Assets/img/vids/home.mp4"
const Main = ()=>{
    return(
        <div className="main">
            <video src={home} autoPlay loop/>
            <div className="content">
                <h1>Medley Diaries</h1>
            </div>
        </div>
    )
}

export default Main