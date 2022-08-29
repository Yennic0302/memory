import "./Score.css"
import { useEffect, useRef, useState } from "react"

export default function Score(props){
    
    const styleScore = useRef()
    const [scorePoints, setScorePoints] = useState([])

    useEffect(()=>{
        setScorePoints(scorePoints=>[...scorePoints,props.score])

        if(props.score < 0){
            styleScore.current.style.color = "#e62625"
        }else{
            styleScore.current.style.color = "#258d19"
        }


        if(scorePoints[scorePoints.length-1] < props.score){
            styleScore.current.style.animation = "correct 0.5s ease-in-out"
            setTimeout(()=>{
                styleScore.current.style.animation = "none"
            },500)
        }
        if(scorePoints[scorePoints.length-1] > props.score){
            styleScore.current.style.animation = "incorrect 0.5s ease-in-out"
            setTimeout(()=>{
                styleScore.current.style.animation = "none "
            },500)
        }

    },[props.score])

    return(
        <div className="score-container">
            <h1>Score:</h1>
            <h2 ref={styleScore}>{props.score}</h2>
        </div>
    )
}