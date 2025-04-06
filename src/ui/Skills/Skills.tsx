import { Page } from "../common/Page"
import "./Skills.scss"
import { Card } from "../common/Card"
import { ReactElement } from "react"
import TypeScriptIcon from "../assets/typescript.svg?react"
import JavaScriptIcon from "../assets/javascript.svg?react"
import ReactIcon from "../assets/react.svg?react"
import CssIcon from "../assets/css.svg?react"
import ScssIcon from "../assets/scss.svg?react"
import AndroidIcon from "../assets/android.svg?react"
import KotlinIcon from "../assets/kotlin.svg?react"
import GitIcon from "../assets/git.svg?react"


export const Skills = () => {

    return (
        <Page>
            <div id="skills">
                <TimeLine />
                <SkillList />
            </div>
        </Page>
    )
}

const TimeLine = () => {

    return (
        <div className="timeline">

            <h1>Experience</h1>

            <TimePeriod
                year="2020"
                title="Studies"
                subtitle="Karelia"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ex vitae mauris sodales, vitae rutrum lectus lobortis. Suspendisse egestas, justo quis faucibus faucibus, dolor metus semper purus, a convallis tellus elit in erat. Maecenas quis eleifend leo. Nulla ultrices in nisi eu varius. "
            />

            <TimePeriod
                year="2022"
                title="Internship"
                subtitle="Sensire"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ex vitae mauris sodales, vitae rutrum lectus lobortis. Suspendisse egestas, justo quis faucibus faucibus, dolor metus semper purus, a convallis tellus elit in erat. Maecenas quis eleifend leo. Nulla ultrices in nisi eu varius. Morbi ipsum ex, tristique vitae diam eu, varius iaculis nisi. Curabitur tincidunt mauris quis nisi faucibus pellentesque. Quisque finibus nisl et nunc lacinia iaculis."
            />

            <TimePeriod
                year="2024"
                title="hey"
                subtitle="hello"
                paragraph="Aliquam posuere ultricies tortor, in ullamcorper nibh porttitor eu. Phasellus rutrum nisi vel dui tempor sollicitudin. Ut augue ipsum, aliquet quis dignissim a, mattis vitae neque. Pellentesque semper fringilla accumsan. Mauris venenatis est quis elit porttitor elementum. Vestibulum faucibus, neque a varius ultrices, arcu felis tincidunt risus, eget maximus felis sem porta nisi. In posuere massa eget aliquam auctor. Aenean tristique luctus magna, a interdum justo consectetur ut. Aenean aliquet ex ut orci bibendum aliquam. Fusce tincidunt sed urna vel suscipit. Nunc accumsan orci non nunc sollicitudin eleifend. Suspendisse auctor ipsum a malesuada semper. Vestibulum sit amet risus est. Etiam nunc purus, consectetur a ornare nec, volutpat a mauris. Duis eget sodales elit. Duis et enim vel augue varius iaculis vel ut sem."
            />

        </div>
    )
}

type TimePeriodProps = {
    year: string,
    title: string,
    subtitle: string,
    paragraph: string
}

const TimePeriod = (props: TimePeriodProps) => {
    return (
        <div className="timeperiod">
            <div className="date">
                <h2>{props.year}</h2>
            </div>
            <div className="path">
                <div className="dot">
                    <div></div>
                </div>
                <div className="line"></div>
            </div>
            <div className="article">
                <h2>{props.title}</h2>
                <h5>{props.subtitle}</h5>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}

const SkillList = () => {
    return (
        <div className="skill-list">
            <h1>Skills</h1>
            <SkillCard
                label="React"
                icon={<ReactIcon id="react"/>}
            />
            <SkillCard
                label="JS & TS"
                icon={
                    <>
                        <JavaScriptIcon />
                        <TypeScriptIcon />
                    </>
                }
            />
            <SkillCard
                label="Css & Scss"
                icon={
                    <>
                        <CssIcon />
                        <ScssIcon />
                    </>
                }
            />
            <SkillCard
                label="Kotlin & Android"
                icon={
                    <>
                        <KotlinIcon />
                        <AndroidIcon />
                    </>
                }
            />
            <SkillCard
                label="Git"
                icon={<GitIcon />}
            />
        </div>
    )
}

type SkillCardProps = {
    label: string,
    icon: ReactElement
}

const SkillCard = (props: SkillCardProps) => {

    return (
        <Card>
            <div className="skill-card">
                <div className="logo">
                    {props.icon}
                </div>
                <span>{props.label}</span>
            </div>
        </Card>
    )
}