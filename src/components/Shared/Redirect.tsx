import React from "react"
if(typeof window === "undefined") {
    //@ts-ignore
    let window = { location: ""}
}
const Redirect: React.FunctionComponent<{url: string}> = ({url}) => {
    setTimeout(() => {
        try {
            //@ts-ignore
            window.location = url
        } catch {}
    }, 100)
    return <></>
}

export default Redirect