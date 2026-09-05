import React from "react"

type PageProps = {
    children: React.ReactNode
}

export default function Page(props: PageProps) {
    return (
        <div
            className="border-purple-200 border-2 flex-1"
        >
            {props.children}
        </div>
    )
}