import "../styles/header.css"
export function Header({score,bestScore}){
    return(
        <header>
            <div className="header-content">
            <div className="title-wrapper">
            <h1 className="title">Random Memory Game</h1>
            <p>Get points by clicking on an image once.</p>
            </div>
            <div className="scores-wrapper">
                <div>
                    <span>Score:</span><span className="scores current-score">{score}</span>
                </div>
              <div>
                <span>Best Score:</span><span className="scores best-score">{bestScore}</span>
            </div>
            </div>
            </div>
        </header>
    )
}