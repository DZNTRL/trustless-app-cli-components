import React, { useContext, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button } from "react-bootstrap"
import { challenge as challengeValidator } from "pro-web-common/dist/js/validators/user"
import { StateManager } from "pro-web-app-cli-state-manager"
import { IAllState } from "../../IAllState"
import { UserServiceContext } from "../../contexts/userService"
const Component: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const username = useSelector((state: IAllState) => {
        return state.User.username
    })
    const [response, setResponse] = useState<string>("")
    const [isValid, setIsValid] = useState<boolean>(false)
    const userServiceContext = useContext(UserServiceContext)
    const handleChange = (val) => {
        setResponse(val)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(StateManager.actions.user(userServiceContext).login(username, response))
    }
    useEffect(() => {
        challengeValidator.validate(response)
            .then(resp => {
                setIsValid(true)
            })
            .catch(resp => {
                setIsValid(false)
            })

    }, [response])
    return <Form onSubmit={handleSubmit}>
        <Form.Group>
            <label htmlFor="response">Response</label>
            <Form.Control id="response" name="response" onChange={e => handleChange(e.target.value)} />
        </Form.Group>
        <Button disabled={!isValid} type="submit">Login</Button>
    </Form>
}

export default Component