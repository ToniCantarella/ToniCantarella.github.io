import { motion } from "framer-motion";

type PageProps = {
    name: string
  }

export const Page = (props: PageProps) => {

    return (
      <motion.div
        className="page"
        initial={{ opacity: 0, transform: "translate(-100%)" }}
        animate={{ opacity: 1, transform: "translate(0%)" }}
        exit={{ opacity: 0, transform: "translate(100%)" }}
        transition={{ duration: .3 }}
      >
        {props.name}
      </motion.div>
    )
  }