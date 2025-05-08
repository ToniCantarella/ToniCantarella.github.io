import { useTranslation } from "react-i18next"
import "./Ripple.scss"
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"

export const RippleButton = () => {
    const messages = [
        "❤️",
        "🩷",
        "🧡",
        "💛",
        "💚",
        "💙",
        "🩵"
    ]
    const maxSnacks = messages.length
    const snackTimeout = 2000
    const [snack, setSnack] = useState<number>(-1)
    const { t } = useTranslation()

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSnack(prev => prev + 1)

        const button = event.currentTarget

        const previousRipple = button.getElementsByClassName("ripple-effect")[0]

        if (previousRipple) {
            previousRipple.remove()
        }

        const rippleEffect = document.createElement("div")
        button.appendChild(rippleEffect)

        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2

        const rect = button.getBoundingClientRect()
        const left = event.clientX - rect.left - radius
        const top = event.clientY - rect.top - radius

        rippleEffect.style.width = rippleEffect.style.height = `${diameter}px`
        rippleEffect.style.left = `${left}px`
        rippleEffect.style.top = `${top}px`
        rippleEffect.classList.add("ripple-effect")
    }

    useEffect(() => {
        if (snack >= maxSnacks) {
            setTimeout(() => {
                setSnack(-1)
            }, snack * snackTimeout)
        }
    }, [snack])

    return (
        <>
            <Snackbar
                snack={messages[snack]}
                maxSnacks={maxSnacks}
                snackTimeout={snackTimeout}
            />

            <button
                id="ripple-button"
                onClick={onClick}
                disabled={snack >= maxSnacks}
            >
                <span>{t("examples.button-sample-text")}</span>
            </button>
        </>
    )
}

const Snackbar = (props: { snack?: string, snackTimeout?: number, maxSnacks?: number }) => {
    const maxSnacks = props.maxSnacks ?? 10
    const [indexToRemove, setIndexToRemove] = useState<number>(-1)
    const [visibleSnacks, setVisibleSnacks] = useState<string[]>([])

    useEffect(() => {
        setVisibleSnacks(prev =>
            prev.length < maxSnacks && props.snack
                ? [...prev, props.snack]
                : prev
        )
    }, [props.snack])

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexToRemove(prev =>
                prev < visibleSnacks.length - 1
                    ? prev + 1
                    : prev
            )
        }, props.snackTimeout ?? 2000)
        return () => clearInterval(interval)
    }, [visibleSnacks.length])

    const remove = (animationName: string) => {
        if (animationName === "snackOut") {
            if (indexToRemove === maxSnacks - 1) {
                setVisibleSnacks([])
                setIndexToRemove(-1)
            }
        }
    }

    return createPortal(
        <div className="snackbar">
            {visibleSnacks.map((snack, index) => (
                <div
                    key={index}
                    className="snack"
                    onAnimationEnd={e => remove(e.animationName)}
                    style={{
                        top: `calc(${visibleSnacks.length - (index + 1)} * var(--snackbar-gap))`,
                        animationName: `${index <= indexToRemove ? "snackOut" : "snackIn"}`
                    }}
                >
                    <span>{snack}</span>
                </div>
            ))}
        </div>,
        document.getElementById("app")!
    )
}