import { useRef } from "react"
import "./Card.css"

export default function Card({data, validateCard}){

    const card = useRef()

    return(
        <>
        <div  className="cardG-bg">
        <div  ref={card} onClick={()=>validateCard(card.current,data.valid)} id={data.id} className={`cardG card${data.valid}`}></div>
        </div>
        
        </>
    )
}