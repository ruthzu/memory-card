import React, { useEffect, useState } from "react";
import { Header } from "./components/header";
import { CardContainer } from "./components/cardContainer";
import { Footer } from "./components/footer";
import "./styles/app.css"

function App() {

  const [score,setScore]=useState(0);
  const [bestScore,setBestScore]=useState(0)
  const [cards,setCard]=useState([]);
  const [clickedCard,setClickedCard]=useState(new Set())
  const [loading,setLoading]=useState(true)
  
  useEffect(()=>{
    async function getCards() {
      const result =await fetch("https://dog.ceo/api/breeds/image/random/12");
      const json =await result.json();
      setCard(json.message);
      setLoading(false);
    }
    getCards();

  },[])

  function shuffleCard(){
        setCard(prev=>[...prev].sort(()=>Math.random()-0.5))
    }
    function onCardClick(url){
        if (clickedCard.has(url)){
            setBestScore(prev=>Math.max(score,prev))
            setScore(0)
            setClickedCard(new Set())
        }
        else{
            setClickedCard(prev=>new Set(prev).add(url))
            setScore(prev=>prev+1)
        }
        shuffleCard();
    }
  return (
    <div>
      <Header score={score} bestScore={bestScore}/>
      {loading?
      (<p style={{textAlign:"center",fontSize:"12px"}}>loading dogs ....</p>):
      (<CardContainer cards={cards} onCardClick={onCardClick} />)
      }
      <Footer />
    </div>
  );
}

export default App;
