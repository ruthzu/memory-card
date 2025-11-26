export function Header({currentScore,bestScore}){
    return(
        <div>
            <section>
            <h1 className="title">Random Memory Game</h1>
            <p>Get points by clicking on an image once.</p>
            </section>
            <section className="scores">
                <p>Score:</p><span id="current-score">{currentScore}</span>
                <p>Best Score:</p><span id="best-score">{bestScore}</span>
            </section>

        </div>
    )
}