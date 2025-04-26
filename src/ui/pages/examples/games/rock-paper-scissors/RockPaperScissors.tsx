import { useEffect, useState } from "react"
import "./RockPaperScissors.scss"

enum Hand {
    ROCK = 0,
    PAPER = 1,
    SCISSORS = 2
}

export const RockPaperScissorsGame = () => {
    const [computerCards, setComputerCards] = useState<number[] | null>(null)
    const [playerCards, setPlayerCards] = useState<Hand[] | null>(null)
    const [playerPlay, setPlayerPlay] = useState<number | null>(null)
    const [computerPlay, setComputerPlay] = useState<Hand | null>(null)
    const [computerPlayIndex, setComputerPlayIndex] = useState<number>(0)
    const [winnerTitle, setWinnerTitle] = useState<string | null>(null)

    const dealCards = () => {
        const newPlayerCards = generateDeck()
        setComputerCards([0, 1])
        setPlayerCards(newPlayerCards)
    }

    const generateDeck = (): Hand[] => {
        return [
            getCard(),
            getCard()
        ]
    }

    const getCard = (): Hand => {
        const keys = Object.keys(Hand).filter(key => isNaN(Number(key))) as Array<keyof typeof Hand>
        const randomKey = keys[Math.floor(Math.random() * keys.length)]
        return Hand[randomKey]
    }

    const playCard = (card: Hand, index: number) => {
        setPlayerPlay(index)
        const newComputerPlay = getCard()
        setComputerPlay(newComputerPlay)
        setComputerPlayIndex(Math.floor(Math.random() * computerCards!.length))
        evaluateWinner(card, newComputerPlay)
    }

    const evaluateWinner = (player: Hand, computer: Hand) => {
        const playerWin = (player - computer + 3) % 3 === 1

        if (player === computer) {
            setWinnerTitle("tie")
        } else if (playerWin) {
            setWinnerTitle("player")
        } else {
            setWinnerTitle("computer")
        }
    }

    useEffect(() => {
        dealCards()
    }, [])

    return (
        <div id="rock-paper-scissors-game">
            {winnerTitle &&
                <span className="winner-title">
                    {winnerTitle}
                </span>
            }
            <div className="game-board">
                <div className="hand computer-hand">
                    {computerCards?.map((card, index) => {
                        const isPlayedCard = computerPlay != null && index === computerPlayIndex
                        return (
                            <div
                                key={index}
                                className={`play-card ${isPlayedCard ? "computer-play" : ""}`}
                                style={{
                                    marginLeft: `${isPlayedCard ? "var(--card-width)" : `calc(${index} * var(--card-width))`}`
                                }}
                            >
                                {isPlayedCard ? Hand[computerPlay] : card}
                            </div>
                        )
                    })}
                </div>
                <div className="hand player-hand">
                    {playerCards?.map((card, index) => {
                        const isPlayedCard = index === playerPlay
                        return (
                            <button
                                key={index}
                                className={`play-card ${isPlayedCard ? "player-play" : ""}`}
                                onClick={() => playCard(card, index)}
                                style={{
                                    marginLeft: `${isPlayedCard ? "0px" : `calc(${index} * var(--card-width))`}`
                                }}
                            >
                                {Hand[card]}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}