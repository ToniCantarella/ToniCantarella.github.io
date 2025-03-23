import { Page } from "../common/Page"
import { Pathnames } from "../navigation/NavigationBar"

export const Landing = () => {

    return (
        <Page
            key={Pathnames.LANDING}
        >
            <div>
                moi maailma
            </div>
        </Page>
    )
}