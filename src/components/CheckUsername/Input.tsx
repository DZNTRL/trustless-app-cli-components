import React, { useContext, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form } from "react-bootstrap"
import { StateManager } from "pro-web-app-cli-state-manager"
import { IAllState } from "../../IAllState"
import { UserServiceContext } from "../../contexts/userService"

const Input: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const isUnique = useSelector((state: IAllState) => {
        return state.User.usernameUnique
    })
    const [name, setName] = useState<string>("")
    const userServiceContext = useContext(UserServiceContext)
    const handleChange = (val) => {
        setName(val)
        if(val.length < 5) return
        dispatch(StateManager.actions.user(userServiceContext).checkUsername(val))
    }
    return <Form.Group>
        <label htmlFor="username">Username</label>
        <Form.Control name="username" value={name} onChange={e => handleChange(e.target.value)} />
    </Form.Group>
}

export default Input