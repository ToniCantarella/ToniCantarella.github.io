import "./Skills.scss"
import TypeScriptIcon from "../../../assets/svg/typescript.svg?react"
import JavaScriptIcon from "../../../assets/svg/javascript.svg?react"
import ReactIcon from "../../../assets/svg/react.svg?react"
import CssIcon from "../../../assets/svg/css.svg?react"
import ScssIcon from "../../../assets/svg/scss.svg?react"
import AndroidIcon from "../../../assets/svg/android.svg?react"
import KotlinIcon from "../../../assets/svg/kotlin.svg?react"
import GitIcon from "../../../assets/svg/git.svg?react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { NavigationContext, Paths } from "../../navigation/NavigationBar"
import { Card } from "../../common/Card"
import { Page } from "../Page"


export const Skills = () => {

    return (
        <Page>
            <div id="skills">
                <SkillList />
                <TimeLine />
            </div>
        </Page>
    )
}

const TimeLine = () => {
    const navContext = useContext(NavigationContext)
    const { t } = useTranslation()

    const currentDate = new Date()
    const currentDateFormatted = `${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`

    return (
        <div id="timeline">
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
                year={currentDateFormatted}
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
                    <div/>
                </div>
                <div className="line"></div>
            </div>
            <div className="article">
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}

const SkillList = () => {
    return (
        <div id="skill-list">
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
                    label="CSS & Sass"
                    icon={
                        <>
                            <CssIcon id="CSS" />
                            <ScssIcon id="Scss" />
                        </>
                    }
                />

                <SkillCard
                    label="Kotlin & Android"
                    icon={
                        <>
                            <KotlinIcon id="Kotlin" />
                            <span id="heart">❤️</span>
                            <AndroidIcon id="Android" />
                        </>
                    }
                />
                {import.meta.env.MODE === "development" &&
                    <SkillCard
                        label="Git"
                        icon={<GitIcon id="Git" />}
                    />
                }
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
            <div className="logo">
                {props.icon}
            </div>
            <span>{props.label}</span>
        </Card>
    )
}