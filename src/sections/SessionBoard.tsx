import React from "react"
import UserInfo from "../components/User/UserInfo"
import Logout from "../components/GettingIn/Logout"
import Redirect from "../components/Shared/Redirect"
import { useSelector } from "react-redux"
import { IAllState } from "../IAllState"
import { LoadingStates } from "pro-web-common/dist/js/enums/state-manager/LoadingStates"

const SessionBoard: React.FunctionComponent = () => {
    return <>
        <Logout />
        <UserInfo />
    </>
}

export default SessionBoard