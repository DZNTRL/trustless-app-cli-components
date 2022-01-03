import React, { useEffect, useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StateManager } from "pro-web-app-cli-state-manager"
import { IAllState } from "../../IAllState"
import { UserServiceContext } from "../../contexts/userService"
import { LoadingStates } from "pro-web-common/dist/js/enums/state-manager/LoadingStates"

export const UserInfo: React.FunctionComponent = () => {
    const user = useSelector((state: IAllState) => state.User.currentUser)
    return <div>
        <p>User: {user.username}</p>
        <p>Last Login: {user.lastLogin}</p>
        <p>Last Logout: {user.lastLogout}</p>
        <p>Public Key</p>
        <pre>
            {user.publicKey}
        </pre>
    </div>
}

const UserInfoLoader: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const userSvc = useContext(UserServiceContext)
    const { user, loading } = useSelector((state: IAllState) => ({
        user: state.User.currentUser,
        loading: state.App.loading
    }))
    useEffect(() => {
        if(user) return
        if(loading === LoadingStates.loading) return
        dispatch(StateManager.actions.user(userSvc).setCurrentUser())        
    }, [user, loading])
    if(user === null) {
        return <h3>loading</h3>
    } else {
        return <UserInfo />
    }
}

export default UserInfoLoader