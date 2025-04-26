import { useEffect, useState } from "react"
import RockIcon from "../../../../../assets/rock.svg?react"
import PaperIcon from "../../../../../assets/paper.svg?react"
import ScissorsIcon from "../../../../../assets/scissors.svg?react"
import "./RockPaperScissors.scss"

enum Hand {
    ROCK = 0,
    PAPER = 1,
    SCISSORS = 2
}

const getIcon = (hand: Hand) => {
    switch (hand) {
        case Hand.ROCK:
            return <RockIcon />
        case Hand.PAPER:
            return <PaperIcon />
        case Hand.SCISSORS:
            return <ScissorsIcon />
        default:
            return null
    }
}

export const RockPaperScissorsGame = () => {
    const [computerCards, setComputerCards] = useState<number[] | null>(null)
    const [playerCards, setPlayerCards] = useState<Hand[] | null>(null)
    const [playerPlay, setPlayerPlay] = useState<number | null>(null)
    const [computerPlay, setComputerPlay] = useState<Hand | null>(null)
    const [computerPlayIndex, setComputerPlayIndex] = useState<number | null>(null)
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

    const redo = () => {
        setComputerPlay(null)
        setComputerPlayIndex(null)
        setPlayerPlay(null)
        setComputerCards(computerCards!.filter((_, i) => computerPlayIndex !== i))
        setPlayerCards(playerCards!.filter((_, i) => playerPlay !== i))
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
            {winnerTitle &&
                <button
                    className=""
                    onClick={() => redo()}
                >
                    retry
                </button>
            }
            {playerCards?.length === 0 &&
                <button
                    onClick={() => dealCards()}
                >
                    start over
                </button>
            }
            <div className="game-board">
                <div className="hand computer-hand">
                    {computerCards?.map((_, index) => {
                        const isPlayedCard = computerPlay != null && index === computerPlayIndex
                        return (
                            <div
                                key={index}
                                className={`game-card ${isPlayedCard ? "computer-play" : ""}`}
                                style={{
                                    marginLeft: `${isPlayedCard ? "var(--card-width)" : `calc(${index} * var(--card-width))`}`,
                                    rotate: `${isPlayedCard ? "15deg" : `${15 + (index * (computerCards.length > 2 ? -15 : -30))}deg`}`
                                }}
                            >
                                {isPlayedCard && getIcon(computerPlay!)}
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
                                className={`game-card ${isPlayedCard ? "player-play" : ""}`}
                                onClick={() => playCard(card, index)}
                                style={{
                                    marginLeft: `${isPlayedCard ? "0px" : `calc(${index} * var(--card-width))`}`,
                                    rotate: `${isPlayedCard ? "-15deg" : `${-15 + (index * (playerCards.length > 2 ? 15 : 30))}deg`}`
                                }}
                            >
                                {getIcon(card)}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}