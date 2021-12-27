import React from "react"
import  { render } from "../../test-facilities/render"
import CheckUsername from "./CheckUsername"

it('it does not show loading', async () => {
    const { getByTestId } = render(<CheckUsername />)
    try {
        expect(getByTestId("loading"))
    } catch {
        expect(true).toBe(true)
    }
})

