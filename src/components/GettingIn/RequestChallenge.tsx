import React, { useContext, useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { StateManager } from "pro-web-app-cli-state-manager"
import { UserServiceContext } from "../../contexts/userService"
import { username as usernameValidator } from "pro-web-common/dist/js/validators/user"

const Component: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const userSvc = useContext(UserServiceContext)
    const [username, setUsername] = useState<string>("")
    const [isValid, setIsValid] = useState<boolean>(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(StateManager.actions.user(userSvc).requestLogin(username))
    }
    const handleChange = (val: string) => {
        setUsername(val)
    }
    useEffect(() => {
        usernameValidator.validate(username)
            .then(result => {
                setIsValid(true)
            })
            .catch(result => {
                setIsValid(false)
            })
    }, [username])
    return <Form onSubmit={handleSubmit}>
        <Form.Group>
            <label htmlFor="username">Username</label>
            <Form.Control id="username" name="username" onChange={e => handleChange(e.target.value)} />
        </Form.Group>
        <Button disabled={!isValid} type="submit">Request Challenge</Button>
    </Form>    
}


export default Component