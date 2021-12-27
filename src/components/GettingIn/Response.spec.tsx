import React from "react"
import  { render } from "../../test-facilities/render"
import { fireEvent } from "@testing-library/dom"
import Response from "./Response"
import { act } from "@testing-library/react"
import { goodUser } from "pro-web-common/dist/js/stubs/api-service/UserServiceStub"
import { StateManager } from "pro-web-app-cli-state-manager"
import { User as UserService } from "pro-web-common/dist/js/stubs/api-service/UserServiceStub"

it("should not show challenge show challenge", async () => {
    // const Container:React.FunctionComponent = () => {
    //     const dispatch = useDispatch()
    //     dispat
    // }
    const actions = StateManager.actions.user(new UserService(null))
    // set the username in the state to accomodate the stub servcie
    StateManager.store.dispatch(actions.requestLogin(goodUser))
    var { getByText, getByLabelText } = render(<Response />)
    try {
        let response = await getByLabelText("Response")
        await act(async () => {
            await fireEvent.change(response, { target: { value: "CHALLENGE" }})
        })
        let button = await getByText("Login")
        expect(button).toBeDisabled()
        await act(async () => {
            await fireEvent.change(response, { target: { value: "A B C D E F G H I J K L" }})
        })
        button = await getByText("Login")
        expect(button).toBeEnabled()
    } catch(e) {
        console.log(e)
        expect(false).toBe(true)
    }
})

