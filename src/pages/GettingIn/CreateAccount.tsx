import React, { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { StateManager } from "pro-web-app-cli-state-manager"
import { UserServiceContext } from "../../contexts/userService"
import { IAllState } from "../../IAllState"
import PublicKey from "../../components/PublicKey"
import CheckUsername from "../../components/CheckUsername/CheckUsername"

const Component: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const userSvc = useContext(UserServiceContext)
    const { username, publicKey } = useSelector((state: IAllState) => ({
        username: state.User.username,
        publicKey: state.User.createUserPublicKey
    }))
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(StateManager.actions.user(userSvc).createUser(username, publicKey))
    }

    return <Form onSubmit={handleSubmit}>
    <CheckUsername />
    <PublicKey />
    <Button type="submit">Create</Button>
    </Form>    
}


export default Component