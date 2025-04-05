import { motion } from "framer-motion";
import "./Page.scss"
import { ReactElement, useContext } from "react";
import { NavigationContext } from "../navigation/NavigationBar";

type PageProps = {
  key: string,
  children: ReactElement
}

export const Page = (props: PageProps) => {
  const navigationContext = useContext(NavigationContext)

  const backward = { opacity: 0, transform: "translate(-100%)" }
  const forward = { opacity: 0, transform: "translate(100%)" }

  const animateIn = navigationContext.direction ? backward : forward
  const animateToShow = { opacity: 1, transform: "translate(0%)" }
  const animateOut = !navigationContext.direction ? backward : forward

  return (
    <motion.div
      className="page"
      key={props.key}
      initial={animateIn}
      animate={animateToShow}
      exit={animateOut}
      transition={{ duration: .3 }}
    >
      <div className="content">
        {props.children}
      </div>
    </motion.div>
  )
}