import {NextSeo} from "next-seo";

import {ReactElement} from "react";
import {WithChildren} from "../../lib/types";

const CommonLayout = ({children}: WithChildren): JSX.Element =>
    <>
        <NextSeo
            titleTemplate={`%s | Next.js Boilerplate`}
            description={`A basic structure to "play" with Next.js, powered by Typescript, styled with Tailwind Css and equipped with Docker`}
        />
        {children}
    </>

export const getLayout =
    (page: ReactElement): JSX.Element =>
        <CommonLayout>{page}</CommonLayout>

export default CommonLayout;