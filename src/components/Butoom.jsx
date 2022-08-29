

export default function Butoom(props){
    return(
        <>
        {!props.isStart?
        <button 
        style={
        {background: "#333",
        borderRadius: "5px",
        color: "#ddd",
        padding: "5px 15px",
        width: "80px",
        height: "50px",
        margin: 'auto',
    }} 
        onClick={props.startGame}>Start</button>:''}
        </>
        )
} 