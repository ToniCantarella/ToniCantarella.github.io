import React, { useRef, useState } from "react"
import "./Carousel.scss"
import ArrowIcon from "../../assets/arrow.svg?react"
import { IndexIndicator } from "./IndexIndicator"

type CarouselProps = {
    children: React.ReactNode
}

export const Carousel = (props: CarouselProps) => {
    const [selectedElement, setSelectedElement] = useState<number>(0)
    const elementCount = React.Children.count(props.children)
    const containerRef = useRef<HTMLDivElement>(null);

    const previousElement = () => {
        const newElement = (selectedElement - 1 + elementCount) % elementCount
        setSelectedElement(newElement)
        scrollTo(newElement)
    }

    const nextElement = () => {
        const newElement = (selectedElement + 1) % elementCount
        setSelectedElement(newElement)
        scrollTo(newElement)
    }

    const scrollTo = (toIndex: number) => {
        const container = containerRef.current!
        const viewWidth = container.offsetWidth;
        const newLeft = viewWidth * toIndex

        container.scrollTo({ left: newLeft, behavior: 'smooth' })
    }

    return (
        <div className="carousel">


            <button
                onClick={previousElement}
                className="previous-button"
            >
                <ArrowIcon />
            </button>
            <button
                onClick={nextElement}
                className="next-button"
            >
                <ArrowIcon />
            </button>

            <div
                ref={containerRef}
                className="carousel-container"
            >
                {React.Children.map(props.children, (child) => (
                    <div
                        className="carousel-item"
                    >
                        {child}
                    </div>
                ))}
            </div>



            {/* Maybe the scroll should act as an indicator for the current index? */}

            <IndexIndicator
                length={elementCount}
                currentIndex={selectedElement}
            />
        </div>
    )
}