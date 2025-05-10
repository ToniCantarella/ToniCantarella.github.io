import { useState } from "react"
import "./Slider.scss"

export const Slider = () => {
    const min = 0
    const max = 100
    const [value, setValue] = useState<number>(max / 2)
    const [currentEmoji, setCurrentEmoji] = useState<number>(0)

    const emojis = [
        "🤥",
        "🫨",
        "🤠",
        "🤯",
        "😮‍💨",
    ]

    return (
        <div className="slider">
            <span
                className="background-element"
                style={{
                    opacity: `${value / max}`,
                    rotate: `${720 * (value / max)}deg`,
                    scale: `${(value* 5) / max}`
                }}
            >
                {emojis[currentEmoji]}
            </span>

            <span
                className="value"
            >
                {value}
            </span>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={event => {
                    setValue(Number(event.target.value))
                    if (Number(event.target.value) < 1) {
                        setCurrentEmoji(prev => (prev + 1) % emojis.length)
                    }
                }}
            />
        </div>
    )
}