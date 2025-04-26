import { useTranslation } from "react-i18next"
import "./Clicker.scss"
import { useEffect, useState } from "react"

type Upgrade = {
    id: number,
    name: string,
    cost: number,
    multiply: number,
    delay: number,

}

const upgrades: Upgrade[] = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: "examples.clicker-upgrade",
    cost: (i + 1) * 10,
    multiply: (i + 1) * .1,
    delay: (i + 1) * 10
}))

export const ClickerGame = () => {
    const [clicks, setClicks] = useState<number>(0)
    const [multiplier, setMultiplier] = useState<number>(1)
    const [automatic, setAutomatic] = useState<boolean>(false)
    const [delay, setDelay] = useState<number>(10000)
    const [upgradesList, setUpgradesList] = useState<Upgrade[]>(upgrades)
    const { t } = useTranslation()

    const onClick = () => {
        setClicks(prev => Math.round((prev + multiplier) * 100) / 100)
    }

    const buyUpgrade = (id: number, multiply: number, newDelay: number, cost: number) => {
        if (cost <= clicks) {
            setUpgradesList(prev => prev.filter(upgrade => upgrade.id !== id))
            setAutomatic(true)
            setMultiplier(prev => Math.round((prev + multiply) * 100) / 100)
            setDelay(prev => prev <= 200 ? prev : prev - newDelay)
            setClicks(prev => Math.round((prev - cost) * 100) / 100)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (automatic) {
                onClick()
            }
        }, delay)
        return () => clearInterval(interval)
    }, [automatic, clicks, multiplier])

    return (
        <div
            id="clicker-game"
        >
            <div id="header">
                <span>{clicks}</span>
                <span>{multiplier}</span>
                {automatic && <span>{delay / 1000}s</span>}
            </div>

            <button
                id="clicker-button"
                onClick={() => onClick()}
            >
                {t("examples.clicker-game-button")}
            </button>
            <div id="clicker-upgrades">
                {upgradesList.slice(0, 10).map(upgrade => (
                    <button
                        key={upgrade.id}
                        className={`upgrade ${upgrade.cost <= clicks ? "can-buy" : ""}`}
                        onClick={() => buyUpgrade(upgrade.id, upgrade.multiply, upgrade.delay, upgrade.cost)}
                    >
                        <span>{t(upgrade.name)}</span>
                        <span>{upgrade.cost}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}