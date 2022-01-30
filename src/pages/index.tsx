import {NextSeo} from "next-seo";

import {Page} from "../client/lib/types";

const IndexPage: Page = () => {
    return (
        <>
            <NextSeo
                title={`Homepage`}
            />
            <div className='flex flex-col items-center justify-center w-full h-screen'>
                <h1 className='text-3xl'>Next.js Boilerplate</h1>
            </div>
        </>
    )
}

export default IndexPage