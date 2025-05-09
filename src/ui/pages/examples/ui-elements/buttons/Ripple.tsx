import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useTranslation } from "react-i18next"
import "./Ripple.scss"

export const RippleButton = () => {
    const [snack, setSnack] = useState<number>(-1)
    const { t } = useTranslation()

    const messages = Array.from({length: 7}).map((_, index) => (
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

type Snack = { id: number; message: string };

const Snackbar = (props: { snack?: string }) => {
    const maxSnacks = 3
    const [visibleSnacks, setVisibleSnacks] = useState<Snack[]>([])
    const [idToRemove, setIdToRemove] = useState<number>(0)

    useEffect(() => {
        if (props.snack) {
            setVisibleSnacks(prev => {
                if (visibleSnacks.length === maxSnacks) {
                    const [firstSnack] = visibleSnacks
                    setIdToRemove(firstSnack.id)
                    return prev
                } else
                    return [...prev, { id: Date.now(), message: props.snack! }]
            })
        }
    }, [props.snack])

    useEffect(() => {
        const interval = setInterval(() => {
            if (visibleSnacks.length > 0) {
                const [firstSnack] = visibleSnacks
                setIdToRemove(firstSnack.id)
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [visibleSnacks.length])

    const removeSnack = (idToRemove: number) => {
        setVisibleSnacks(prev => prev.filter(snack => snack.id !== idToRemove))
    };

    return createPortal(
        <div className="snackbar">
            {visibleSnacks.map((snack, index) => (
                <div
                    key={snack.id}
                    className="snack"
                    onAnimationEnd={e => {
                        if (e.animationName === "snackOut") removeSnack(snack.id);
                    }}
                    style={{
                        top: `calc(${visibleSnacks.length - (index + 1)} * var(--snackbar-gap))`,
                        animationName: snack.id === idToRemove ? "snackOut" : "snackIn"
                    }}
                >
                    <span>{snack.message}</span>
                </div>
            ))}
        </div>,
        document.getElementById("app")!
    )
}