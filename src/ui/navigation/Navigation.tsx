import {useState} from "react"
import {useLocation} from "react-router";

export enum Direction {
    BACK = "back",
    FORWARD = "forward"
}

const routeOrder = ["/", "/experience", "/examples", "/art", "/contact"]

export default function useRouteDirection() {
    const { pathname } = useLocation()
    const [state, setState] = useState({
        prev: pathname,
        direction: Direction.FORWARD,
    })

    if (state.prev !== pathname) {
        const previousIndex = routeOrder.indexOf(state.prev)
        const currentIndex = routeOrder.indexOf(pathname)

        setState({
            prev: pathname,
            direction: currentIndex > previousIndex
                ? Direction.FORWARD
                : Direction.BACK,
        })
    }

    return state.direction
}