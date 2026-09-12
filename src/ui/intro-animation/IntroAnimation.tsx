import {AnimatePresence, motion} from "motion/react"

type IntroAnimationProps = {
    playing: boolean
    onExit: () => void
    onExitComplete: () => void
}

export default function IntroAnimation(props: IntroAnimationProps) {

    return (
        <AnimatePresence onExitComplete={props.onExitComplete}>
            {props.playing &&
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 2}}
                    onAnimationComplete={props.onExit}
                    className="absolute w-full h-full bg-amber-500 z-10"
                >
                </motion.div>
            }
        </AnimatePresence>
    )
}