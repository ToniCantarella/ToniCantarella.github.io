import React from "react"

export const Background = (props: { theme: string }) => {

    const background = () => {
        switch (props.theme) {
            case "frutiger-aero":
                return <FrutigerAeroBackground />
                break;
        }
    }

    return (
        <div id="background">
            {background()}
        </div>
    )
}

const FrutigerAeroBackground = () => {
    const count = Math.floor(Math.random() * 100) + 20

    return (
        Array.from({ length: count }, (_, i) => (
            <React.Fragment key={i}>
                <Bubble index={i} />
            </React.Fragment>
        ))
    )
}

const Bubble = (props: { index: number }) => {
    const size = Math.floor(Math.random() * 100) + 10

    const positionMin = 5
    const positionMax = 100
    const position = Math.floor(Math.random() * (positionMax - positionMin) + 1) + positionMin

    const animationDelaySecond = Math.floor(Math.random() * (props.index + 1))
    const animationDelayMillis = Math.floor(Math.random() * (props.index + 1))

    const movementDuration = Math.floor(Math.random() * ((25 - 10) + 1)) + 10
    const swayDuration = Math.floor(Math.random() * ((4 - 2) + 1)) + 2

    const red = Math.floor(Math.random() * (150 - 1) + 1) + 1
    const green = Math.floor(Math.random() * (150 - 70) + 1) + 70

    return (
        <div
            key={props.index}
            className="bubble"
            style={{
                height: `${size}px`,
                width: `${size}px`,
                left: `${position}%`,
                transform: `translateX(${position * .8}vw)`,
                animationDelay: `${animationDelaySecond}.${animationDelayMillis}s, ${animationDelaySecond}.${animationDelayMillis}s`,
                animationDuration: `${movementDuration}s, ${swayDuration}s`,
                background: `linear-gradient(10deg, rgba(255, 255, 255, 0.733), rgba(${red}, ${green}, 255, 0.226))`,
                filter: `blur(${(50 / size)}px)`
            }}
        >
        </div>
    )
}