import { Page } from "../common/Page"
import "./Skills.scss"

export const Skills = () => {

    return (
        <Page>
            <div id="skills">
                <h1>Experience</h1>
                <TimeLine />
            </div>
        </Page>
    )
}

const TimeLine = () => {

    return (
        <div className="timeline">

            <div className="timeperiod">
                <div className="date">
                    <h2>2022</h2>
                </div>
                <div className="foo">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div className="article">
                    <h2>I learned a skill</h2>
                    <h5>Where I learned it</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vestibulum turpis, ac tristique massa. Curabitur et nisl quis lectus facilisis imperdiet ac et nibh. Proin porta blandit nunc id consectetur. In imperdiet mi sit amet venenatis ullamcorper. Donec mollis tortor id dolor blandit, ac scelerisque magna sodales. Vestibulum tincidunt finibus posuere. Aenean ut venenatis turpis. Vivamus metus sem, dignissim sed sagittis sit amet, lobortis vel sem. Phasellus id rhoncus massa, at euismod magna.</p>
                </div>
            </div>

            <div className="timeperiod">
                <div className="date">
                    <h2>2023</h2>
                </div>
                <div className="foo">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div className="article">
                    <h2>I learned a skill</h2>
                    <h5>Where I learned it</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vestibulum turpis, ac tristique massa. Curabitur et nisl quis lectus facilisis imperdiet ac et nibh. Proin porta blandit nunc id consectetur. In imperdiet mi sit amet venenatis ullamcorper. Donec mollis tortor id dolor blandit, ac scelerisque magna sodales. Vestibulum tincidunt finibus posuere. Aenean ut venenatis turpis. Vivamus metus sem, dignissim sed sagittis sit amet, lobortis vel sem. Phasellus id rhoncus massa, at euismod magna.</p>
                </div>
            </div>

            <div className="timeperiod">
                <div className="date">
                    <h2>2023</h2>
                </div>
                <div className="foo">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div className="article">
                    <h2>I learned a skill</h2>
                    <h5>Where I learned it</h5>
                    <p>Lorem ipsum dolor sit amet, consectetSed quis imperdiet sem, convallis fringilla risus. Fusce laoreet eget sem vitae elementum. Integer ante eros, lobortis eu risus at, auctor porta eros. Fusce iaculis massa tellus. Pellentesque ut rutrum nunc, ac tincidunt augue. Integer commodo, magna nec finibus pretium, ipsum odio pellentesque eros, ut pretium sapien quam ut magna. Maecenas pharetra egestas lectus, eget pharetra dui mollis dignissim. Etiam velit purus, feugiat eget ullamcorper sit amet, finibus et ex. Proin scelerisque suscipit scelerisque. Nunc porta, lectus sit amet porttitor vehicula, purus nulla gravida lorem, sed aliquam leo justo dignissim magna. Aliquam justo sem, tempor elementum ligula vitae, tincidunt consectetur dolor. Nullam ex massa, sagittis ut eleifend in, molestie quis enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis, ligula sodales placerat consectetur, felis lectus facilisis dolor, in semper elit massa ut leo. Fusce eget vestibulum turpis. Integer imperdiet pulvinar est vitae efficitur.ur adipiscing elit. Aliquam a vestibulum turpis, ac tristique massa. Curabitur et nisl quis lectus facilisis imperdiet ac et nibh. Proin porta blandit nunc id consectetur. In imperdiet mi sit amet venenatis ullamcorper. Donec mollis tortor id dolor blandit, ac scelerisque magna sodales. Vestibulum tincidunt finibus posuere. Aenean ut venenatis turpis. Vivamus metus sem, dignissim sed sagittis sit amet, lobortis vel sem. Phasellus id rhoncus massa, at euismod magna.</p>
                </div>
            </div>

        </div>
    )
}