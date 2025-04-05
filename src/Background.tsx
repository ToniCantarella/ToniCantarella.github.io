import React from "react"

export const Background = (props: { theme: string }) => {

    return (
        <div id="background">
            {props.theme === "frutiger-aero" &&
                <FrutigerAeroBackground />
            }
        </div>
    )
}

const FrutigerAeroBackground = () => {
    const count = Math.floor(Math.random() * 200) + 20

    return (
        Array.from({ length: count }, (_, i) => (
            <React.Fragment key={i}>
                <Bubble
                    index={i}
                />
            </React.Fragment>
        ))
    )
}

const Bubble = (props: { index: number }) => {
    const size = Math.floor(Math.random() * 100) + 10
    const positionMin = 300
    const positionMax = 1
    const position = Math.floor(Math.random() * (positionMax - positionMin) + 1) + positionMin
    const animationDelaySecond = Math.floor(Math.random() * (props.index + 1))
    const animationDelayMillis = Math.floor(Math.random() * (props.index + 1))
    const movementDuration = Math.floor(Math.random() * ((25 - 10) + 1)) + 10
    const swayDuration = Math.floor(Math.random() * ((4 - 2) + 1)) + 2

    return (
        <div
            key={props.index}
            className="bubble"
            style={{
                height: `${size}px`,
                width: `${size}px`,
                left: `${position}%`,
                animationDelay: `${animationDelaySecond}.${animationDelayMillis}s, ${animationDelaySecond}.${animationDelayMillis}s`,
                animationDuration: `${movementDuration}s, ${swayDuration}s`,
            }}
        >
        </div>
    )
}