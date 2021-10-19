import {getLayout as getSiteLayout} from "../core/layout";

const CommonLayout = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export const getLayout = page =>
    getSiteLayout(<CommonLayout>{page}</CommonLayout>)

export default CommonLayout;