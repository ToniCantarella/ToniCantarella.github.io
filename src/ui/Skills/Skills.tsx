import { Page } from "../common/Page"
import "./Skills.scss"
import { Card } from "../common/Card"

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
            <div className="foo">
                <div className="dot"></div>
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}