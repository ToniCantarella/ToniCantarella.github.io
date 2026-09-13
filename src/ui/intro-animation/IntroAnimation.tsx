import {AnimatePresence, motion} from "motion/react"
import {useState} from "react";

type IntroAnimationProps = {
    playing: boolean
    onExit: () => void
    onExitComplete: () => void
}


export default function IntroAnimation(props: IntroAnimationProps) {
    const VISITED_KEY = "hasVisitedIntro"
    const [firstVisit, setFirstVisit] = useState(localStorage.getItem(VISITED_KEY) !== "true")

    return (
        <AnimatePresence onExitComplete={() => {
            localStorage.setItem(VISITED_KEY, "true")
            props.onExitComplete()
        }}>
            {(props.playing || firstVisit) &&
                <motion.div
                    initial={{opacity: firstVisit ? 1 : 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 5}}
                    className="absolute w-full h-full bg-amber-950 z-10"
                >
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 5}}
                        onAnimationComplete={() => {
                            setFirstVisit(false)
                            props.onExit()
                        }}
                        className="absolute w-full h-full bg-amber-500 z-11"
                    >
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}