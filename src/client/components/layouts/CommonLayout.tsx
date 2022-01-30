import {ReactElement} from "react";
import {WithChildren} from "../../lib/types";

const CommonLayout = ({children}: WithChildren): JSX.Element =>
    <>
        {children}
    </>

export const getLayout =
    (page: ReactElement): JSX.Element =>
        <CommonLayout>{page}</CommonLayout>

export default CommonLayout;