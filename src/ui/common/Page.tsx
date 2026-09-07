import React from "react"
import {motion, usePresenceData} from "framer-motion"
import {Direction} from "../navigation/Navigation.tsx";

type PageProps = {
    children: React.ReactNode
}

export default function Page(props: PageProps) {
    const navigationDirection = usePresenceData()

    const backAnimation = {opacity: 0, x: "-100%"}
    const forwardAnimation = {opacity: 0, x: "100%"}

    const defaultPosition = {opacity: 1, x: 0}

    const enterAnimation = navigationDirection === Direction.FORWARD
        ? forwardAnimation
        : backAnimation
    const exitAnimation = navigationDirection === Direction.BACK
        ? forwardAnimation
        : backAnimation

    return (
        <motion.div
            className="border-purple-200 border-2 absolute w-full h-full"
            initial={enterAnimation}
            animate={defaultPosition}
            exit={exitAnimation}
            transition={{duration: 1}}
        >
            {props.children}
        </motion.div>
    )
}