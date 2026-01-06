import React, { useEffect, useRef, useState } from "react"
import ArrowIcon from "../../assets/svg/arrow.svg?react"
import "./Carousel.scss"
import { IndexIndicator } from "./IndexIndicator"
import { ProgressIndicator } from "./ProgressIndicator"

type CarouselProps = {
    stayDuration?: number,
    children: React.ReactNode
}

export const Carousel = (props: CarouselProps) => {
    const [selectedElement, setSelectedElement] = useState<number>(0)
    const [progress, setProgress] = useState<number>(0)
    const elementCount = React.Children.count(props.children)
    const containerRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<number | null>(null)

    const previousElement = () => {
        props.stayDuration && handleInterval()
        const newElement = (selectedElement - 1 + elementCount) % elementCount
        scrollTo(newElement)
    }

    const nextElement = () => {
        handleInterval()
        const newElement = (selectedElement + 1) % elementCount
        scrollTo(newElement)
    }

    const scrollTo = (toIndex: number) => {
        const container = containerRef.current!
        const viewWidth = container.offsetWidth;
        const newLeft = viewWidth * toIndex

        container.scrollTo({ left: newLeft, behavior: 'smooth' })
    }

    const onScroll = () => {
        handleInterval()
        const container = containerRef.current!
        const currentLeft = container.scrollLeft
        const viewWidth = container.offsetWidth
        const newElement = Math.round(currentLeft / viewWidth)

        setSelectedElement(newElement)
    }

    const handleInterval = () => {
        if (props.stayDuration) {
            setProgress(0)
            clearInterval(intervalRef.current!)
            intervalRef.current = setInterval(() => {
                nextElement()
            }, props.stayDuration)
        }
    }

    useEffect(() => {
        if (props.stayDuration) {
            handleInterval()
            return () => clearInterval(intervalRef.current!)
        }
    }, [])

    useEffect(() => {
        if (props.stayDuration) {
            const interval = setInterval(() => {
                setProgress(prev => prev >= 100 ? 0 : prev + 1)
            }, props.stayDuration / 100)

            return () => clearInterval(interval)
        }
    }, [])

    return (
        <div className="carousel">

            <div
                ref={containerRef}
                onScroll={onScroll}
                className="carousel-container"
            >
                {React.Children.map(props.children, (child) => (
                    <div className="carousel-item">
                        {child}
                    </div>
                ))}
            </div>

            {props.stayDuration &&
                <ProgressIndicator
                    progress={progress}
                />
            }

            <IndexIndicator
                length={elementCount}
                currentIndex={selectedElement}
            />

            <button
                onClick={previousElement}
                className="carousel-button previous-button"
            >
                <ArrowIcon />
            </button>
            <button
                onClick={nextElement}
                className="carousel-button next-button"
            >
                <ArrowIcon />
            </button>
        </div>
    )
}