import React, { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { StateManager } from "pro-web-app-cli-state-manager"
import { UserServiceContext } from "../../contexts/userService"
import { IAllState } from "../../IAllState"
import RequestChallenge from "../../components/GettingIn/RequestChallenge"
import Respond from "../../components/GettingIn/Respond"

const Component: React.FunctionComponent = () => {
    
    const { hasChallenge } = useSelector((state: IAllState) => {
        return {
            hasChallenge: state.User.challenge !== null
        }
    })
    console.log("hasChallenge", hasChallenge)
    if(hasChallenge) {
       return <Respond />
    }
    return <RequestChallenge />
}


export default Component