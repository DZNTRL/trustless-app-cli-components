import React, { useContext } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { StateManager } from "pro-web-app-cli-state-manager"
import { UserServiceContext } from "../contexts/userService"
const PublicKey: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const userSvc = useContext(UserServiceContext)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const actions = StateManager.actions.user(userSvc)
        const value = e.currentTarget.value === "" ? null : e.currentTarget.value
        dispatch(actions.setCreateUserPublicKey(value))
    }
    return <Form.Group className="mb-3" controlId="publicKey">
        <label htmlFor="publicKey">Public Key</label>
        <Form.Control name="publicKey" as="textarea" onChange={handleChange} />
    </Form.Group>
}

export default PublicKey