import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useTranslation } from "react-i18next"
import "./Ripple.scss"

export const RippleButton = () => {
    const [snack, setSnack] = useState<number>(-1)
    const { t } = useTranslation()

    const messages = Array.from({ length: 7 }).map((_, index) => (
        t(`examples.snackbar-message-${index}`)
    ))

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(messages)
        setSnack(Math.floor(Math.random() * messages.length))

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

    return (
        <>
            <Snackbar
                snack={messages[snack]}
            />

            <button
                id="ripple-button"
                onClick={onClick}
            >
                <span>{t("examples.button-sample-text")}</span>
            </button>
        </>
    )
}

type Snack = { id: number, message: string, remove?: boolean, ready?: boolean }

const Snackbar = (props: { snack?: string }) => {
    const maxSnacks = 3
    const [visibleSnacks, setVisibleSnacks] = useState<Snack[]>([])

    useEffect(() => {
        if (props.snack) {
            setVisibleSnacks(prev => {
                const activeSnacks = prev.filter(snack => !snack.remove)
                const newSnacks = [...prev]

                if (activeSnacks.length >= maxSnacks) {
                    const indexToRemove = prev.findIndex(snack => !snack.remove)
                    if (indexToRemove !== -1) {
                        newSnacks[indexToRemove] = { ...newSnacks[indexToRemove], remove: true }
                    }
                }

                return [...newSnacks, { id: Date.now(), message: props.snack! }]
            })
        }
    }, [props.snack])

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleSnacks(prev => {
                const indexToRemove = prev.findIndex(snack => !snack.remove)
                if (indexToRemove !== -1) {
                    const newSnacks = [...prev]
                    newSnacks[indexToRemove] = { ...newSnacks[indexToRemove], remove: true }
                    return newSnacks
                }
                return prev
            })
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const deleteSnack = (id: number) => {
        setVisibleSnacks(prev => prev.filter(snack => snack.id !== id))
    }

    const onAnimationEnd = (animationName: string, snackId: number) => {
        if (animationName === "snackIn") setVisibleSnacks(prev => prev.map(snack => snack.id === snackId ? { ...snack, ready: true } : snack))
        if (animationName === "snackOut") deleteSnack(snackId)
    }

    return createPortal(
        <div className="snackbar">
            {visibleSnacks.map((snack, index) => (
                <div
                    key={snack.id}
                    className="snack"
                    onAnimationEnd={(e) => onAnimationEnd(e.animationName, snack.id)}
                    style={{
                        top: `calc(${visibleSnacks.length - (index + 1)} * var(--snackbar-gap))`,
                        animationName: snack.remove && snack.ready ? "snackOut" : "snackIn",
                    }}
                >
                    <span>{snack.message}</span>
                </div>
            ))}
        </div>,
        document.getElementById("app")!
    )
}