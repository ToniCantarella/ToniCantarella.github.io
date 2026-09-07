import {useEffect, useState} from "react"
import {useLocation} from "react-router";

enum Direction {
    BACK = "back",
    FORWARD = "forward"
}

const routeOrder = ["/", "/experience", "/examples", "/art", "/contact"]

export default function useRouteDirection() {
    const location = useLocation()
    const [prevLocation, setPrevLocation] = useState<string>(location.pathname)
    const [direction, setDirection] = useState<Direction>(Direction.FORWARD)

    useEffect(() => {
        setPrevLocation(location.pathname)

        const previousIndex = routeOrder.indexOf(prevLocation)
        const currentIndex = routeOrder.indexOf(location.pathname)

        if (previousIndex < currentIndex) {
            setDirection(Direction.FORWARD)
        } else {
            setDirection(Direction.BACK)
        }
    },[location.pathname])

    return direction
}