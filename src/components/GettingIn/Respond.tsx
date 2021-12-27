import React from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { StateManager } from "pro-web-app-cli-state-manager"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IAllState } from "../../IAllState"
import Response from "./Response"

const Respond: React.FunctionComponent = () => {
    const { username, challenge } = useSelector((state: IAllState) => ({
        username: state.User.username,
        challenge: state.User.challenge
    }))
    return <>
        <p>{username}</p>
        <pre>
            {challenge}
        </pre>
        <CopyToClipboard text={challenge} onCopy={() => {}}>
            <button>Copy to clipboard with button</button>
        </CopyToClipboard>
        <Response />

    </>
}

export default Respond