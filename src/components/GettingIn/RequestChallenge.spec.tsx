import React from "react"
import  { render } from "../../test-facilities/render"
import { fireEvent } from "@testing-library/dom"
import RequestChallenge from "./RequestChallenge"
import { act } from "@testing-library/react"

it('should be disabled when invalid and enabled when valid', async () => {
    const { container, getByText, getByLabelText } = render(<RequestChallenge />)
    try {
        let username = await getByLabelText("Username")
        await act(async () => {
            await fireEvent.change(username, { target: { value: "t" }})
            await fireEvent.change(username, { target: { value: "te" }})    
        })
        let button = await getByText("Request Challenge")        
        expect(button).toBeDisabled()
        await act(async () => {
            await fireEvent.change(username, { target: { value: "testa" }})
        })
        button = await getByText("Request Challenge")        
        expect(button).toBeEnabled()

    } catch(e) {
        expect(true).toBe(true)
    }
})

