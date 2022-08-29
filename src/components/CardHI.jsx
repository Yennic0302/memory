import './CardHI.css'

export default function CardHI({data}){

		let colorCondition
		let colorDificult
		let colorScore

		if(data.gameCondition ==='Win'){
				colorCondition = "#258d19"
		}else{
				colorCondition = "#e62625"
		}

		if(data.dificult ==='Easy'){
				colorDificult = "#258d19"
		}else if(data.dificult==="Medium"){
				colorDificult ="#b9b922"
		}else{
				colorDificult = "#e62625"
		}

		if(data.score > 0){
				colorScore = "#258d19"
		}else{
				colorScore = "#e62625"
		}
		
		return(
				<div className='CardHI'>
						<div className="game-condition">
								<p style={{color: colorCondition, fontWeight: "bold"}}>{data.gameCondition}</p>
						</div>
						<div className="main-options">
								<p style={{color: colorDificult}}>{data.dificult}</p>
								<p>{data.time}</p>
								<p>{data.category}</p>
						</div>
						<div className="game-statistics">
								<p>score:<span style={{color: colorScore, fontWeight: "bold"}}> {data.score}</span></p>
								<p>time-end: 00:{data.timeEnd}</p>
								<p>{data.errors}</p>
						</div>
						<div className='game-date'>
								<p>{data.date}</p>
						</div>
				</div>
		)
}