import { useEffect, useState } from "react"
import RockIcon from "../../../../../assets/svg/rock.svg?react"
import PaperIcon from "../../../../../assets/svg/paper.svg?react"
import ScissorsIcon from "../../../../../assets/svg/scissors.svg?react"
import "./RockPaperScissors.scss"
import { useTranslation } from "react-i18next"

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
    const moveDelay = 1000
    const { t } = useTranslation()

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
        setTimeout(() => {
            setComputerPlay(newComputerPlay)
            setComputerPlayIndex(Math.floor(Math.random() * computerCards!.length))
            evaluateWinner(card, newComputerPlay)
        }, moveDelay)
    }

    const evaluateWinner = (player: Hand, computer: Hand) => {
        const playerWin = (player - computer + 3) % 3 === 1
        const textBase = "examples.rps-game-winner-"

        if (player === computer) {
            setWinnerTitle(`${textBase}tie`)
        } else if (playerWin) {
            setWinnerTitle(`${textBase}player`)
        } else {
            setWinnerTitle(`${textBase}computer`)
        }
    }

    /* const redo = () => {
        setComputerPlay(null)
        setComputerPlayIndex(null)
        setPlayerPlay(null)
        setComputerCards(computerCards!.filter((_, i) => computerPlayIndex !== i))
        setPlayerCards(playerCards!.filter((_, i) => playerPlay !== i))
    } */

    useEffect(() => {
        dealCards()
    }, [])

    const randomRotation = () => `${Math.floor(Math.random() * (30 - (-15)) + (-15))}deg`

    return (
        <div id="rock-paper-scissors-game">
            {winnerTitle &&
                <span className="winner-title">
                    {t(winnerTitle)}
                </span>
            }
            <div className={`game-board ${playerPlay !== null ? "mid-play" : ""}`}>
                <div className="hand computer-hand">

                </div>
                {computerCards?.map((_, index) => {
                    const isPlayedCard = computerPlay != null && index === computerPlayIndex
                    return (
                        <div
                            key={index}
                            className={`game-card ${isPlayedCard ? "computer-play" : "computer-card"}`}
                            style={{
                                marginLeft: `${isPlayedCard ? "var(--card-width)" : `calc(${index} * var(--card-width))`}`,
                                rotate: `${isPlayedCard ? randomRotation() : `${15 + (index * (computerCards.length > 2 ? -15 : -30))}deg`}`
                            }}
                        >
                            {isPlayedCard && getIcon(computerPlay!)}
                        </div>
                    )
                })}
                <div className="hand player-hand">

                </div>
                {playerCards?.map((card, index) => {
                    const isPlayedCard = index === playerPlay
                    return (
                        <button
                            key={index}
                            className={`game-card ${isPlayedCard ? "player-play" : "player-card"}`}
                            onClick={() => playCard(card, index)}
                            style={{
                                marginLeft: `${isPlayedCard ? "0px" : `calc(${index} * var(--card-width))`}`,
                                rotate: `${isPlayedCard ? randomRotation() : `${-15 + (index * (playerCards.length > 2 ? 15 : 30))}deg`}`
                            }}
                        >
                            {getIcon(card)}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}