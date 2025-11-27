import "../styles/cardContainer.css"
export function CardContainer({cards, onCardClick}){
    return(
        <div className="card-grid"> 
            {cards.map((card)=>(
               <button 
                className="img-btn"
                key={card}
                onClick={()=>onCardClick(card)}
               >
                    <img src={card} alt="pic" />
                </button> 
            ))}
        </div>
    )
}