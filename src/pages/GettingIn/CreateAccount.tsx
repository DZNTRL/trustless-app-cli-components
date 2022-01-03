import React, { useContext, useState, useEffect } from "react"
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
    const [validated, setValidated] = useState<boolean>(false)
    const { username, publicKey } = useSelector((state: IAllState) => ({
        username: state.User.createUsername,
        publicKey: state.User.createUserPublicKey
    }))
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(StateManager.actions.user(userSvc).createUser(username, publicKey))
    }
    useEffect(() => {
        console.log("username", username, "publickey", publicKey)
        setValidated(username !== null && publicKey !== null)
    }, [username, publicKey])

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <CheckUsername />
    <PublicKey />
    <Button disabled={!validated} type="submit">Create</Button>
    </Form>    
}


export default Component