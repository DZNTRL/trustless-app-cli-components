import React, { useContext, useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { StateManager } from "pro-web-app-cli-state-manager"
import { UserServiceContext } from "../../contexts/userService"
import { IAllState } from "../../IAllState"
import Redirect from "../Shared/Redirect"

const Logout: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const userSvc = useContext(UserServiceContext)
    const [shouldRedirect, setShouldRedirect] = useState<boolean>(false)
    const logout = () => {
        dispatch(StateManager.actions.user(userSvc).logout())
        setShouldRedirect(true)
    }
    return <>
        <Button onClick={logout}>Logout</Button>
        {shouldRedirect && <Redirect url="/getting-in" />}
    </>
}

export default Logout