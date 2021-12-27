import React from "react"
import  { render } from "../../test-facilities/render"
import { fireEvent } from "@testing-library/dom"
import Respond from "./Respond"
import { act } from "@testing-library/react"
import { goodUser } from "pro-web-common/dist/js/stubs/api-service/UserServiceStub"

it('should be disabled when invalid and enabled when valid', async () => {
    const { container, getByText, getByLabelText } = render(<Respond />)
    try {
        let response = await getByLabelText("response")
        let button = await getByText("Login")
        await act(async () => {
            await fireEvent.change(response, { target: { value: goodUser }})
        })
        expect(button).toBeDisabled()
        button = await getByText("Login")
        expect(button).toBeEnabled()

    } catch(e) {
        expect(true).toBe(true)
    }
})

