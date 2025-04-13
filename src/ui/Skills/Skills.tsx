import { Page } from "../common/Page"
import "./Skills.scss"
import { Card } from "../common/Card"
import TypeScriptIcon from "../assets/typescript.svg?react"
import JavaScriptIcon from "../assets/javascript.svg?react"
import ReactIcon from "../assets/react.svg?react"
import CssIcon from "../assets/css.svg?react"
import ScssIcon from "../assets/scss.svg?react"
import AndroidIcon from "../assets/android.svg?react"
import KotlinIcon from "../assets/kotlin.svg?react"
import GitIcon from "../assets/git.svg?react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { NavigationContext, Paths } from "../navigation/NavigationBar"
import { useContext } from "react"


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
    const navContext = useContext(NavigationContext)
    const { t } = useTranslation()

    const currentDate = new Date()
    const currentFormatted = `${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`

    return (
        <div id="timeline">
            <h1>{t("skills.experience")}</h1>

            <TimePeriod
                year="8/2020"
                title={t("skills.studies")}
                subtitle={t("skills.karelia-amk")}
                paragraph={t("skills.studies-article")}
            />

            <TimePeriod
                year="5/2022"
                title={t("skills.internship")}
                subtitle={t("skills.sensire")}
                paragraph={t("skills.internship-article")}
            />

            <TimePeriod
                year="12/2022"
                title={t("skills.employed")}
                subtitle={t("skills.sensire")}
                paragraph={t("skills.employed-article")}
            />

            <TimePeriod
                year="6/2024"
                title={t("skills.graduation")}
                subtitle={t("skills.karelia-amk")}
                paragraph={t("skills.graduation-article")}
            />

            <TimePeriod
                year={currentFormatted}
                title={t("skills.future")}
                subtitle={t("skills.your-company")}
                paragraph={
                    <>
                        {t("skills.future-article")}
                        <Link
                            onClick={() => navContext.onNavClick(Paths.EXAMPLES)}
                            to={Paths.EXAMPLES}
                        >
                            {t("skills.visual-examples")}
                        </Link>
                        {t("skills.much-more")}
                    </>
                }
            />
        </div>
    )
}

type TimePeriodProps = {
    year: string,
    title: string,
    subtitle: string,
    paragraph: string | React.ReactNode
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
                <h4>{props.subtitle}</h4>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}

const SkillList = () => {
    const { t } = useTranslation()

    return (
        <div id="skill-list">
            <h1>{t("navigation.skills")}</h1>

            <div id="skill-grid">
                <SkillCard
                    label="React"
                    icon={<ReactIcon id="react" />}
                />

                <SkillCard
                    label="JS & TS"
                    icon={
                        <>
                            <JavaScriptIcon id="javascript" />
                            <TypeScriptIcon id="typescript" />
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
        </div>
    )
}

type SkillCardProps = {
    label: string,
    icon: React.ReactNode
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