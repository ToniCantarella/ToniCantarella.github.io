import { useState } from "react"
import "./Slider.scss"

export const Slider = () => {
    const min = 0
    const max = 100
    const [value, setValue] = useState<number>(max / 2)


    return (
        <div className="slider">
            <input type="range" min={min} max={max} value={value} onChange={event => setValue(Number(event.target.value))} />
            <span>{value}</span>
        </div>
    )
}