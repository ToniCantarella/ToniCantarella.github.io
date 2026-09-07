import React from "react"
import {motion} from "framer-motion"

type PageProps = {
    children: React.ReactNode
}

export default function Page(props: PageProps) {
    return (
        <motion.div
            className="border-purple-200 border-2 flex-1"
        >
            {props.children}
        </motion.div>
    )
}