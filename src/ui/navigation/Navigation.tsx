import {useState} from "react"
import {useLocation} from "react-router";

export enum Direction {
    BACK = "back",
    FORWARD = "forward"
}

export type Route = {
    path: string
    label: string
}

export const routes: Route[] = [
    {
        path: "/",
        label: "About",
    },
    {
        path: "/experience",
        label: "Experience",
    },
    {
        path: "/examples",
        label: "Examples",
    },
    {
        path: "/art",
        label: "Art",
    },
    {
        path: "/contact",
        label: "Contact",
    },
]

const routeOrder = routes.map(route => route.path)

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