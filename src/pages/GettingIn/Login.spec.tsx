import React from "react"
import  { render } from "../../test-facilities/render"
import { fireEvent } from "@testing-library/dom"
import { act } from "@testing-library/react"
import { useDispatch } from "react-redux"
import Login from "./Login"
import { StateManager } from "pro-web-app-cli-state-manager"
import { goodUser, goodChallenge, User as UserService } from "pro-web-common/dist/js/stubs/api-service/UserServiceStub"

it("should be on Request Challenge by default state", async () => {
    const { container, getByText, getByLabelText } = render(<Login />)
    try {
        let button = await getByText("Request Challenge")
    } catch(e) {
        console.log(e)
        expect(false).toBe(true)
    }    
})

it("should be on Login if proper state configuration", (done) => {
    const actions = StateManager.actions.user(new UserService(null))
    StateManager.store.dispatch(actions.requestLogin(goodUser))
    setTimeout(async () => {
        const { container, getByText, getByLabelText } = render(<Login />)
        const state = StateManager.store.getState()
        try {
            let button = await getByText("Login")
        } catch(e) {
            console.log(e)
            expect(false).toBe(true)
        }    
        done()
    }, 100)
})
