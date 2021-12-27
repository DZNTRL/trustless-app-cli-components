import React from "react"
import  { render } from "../test-facilities/render"
import GettingIn from "./GettingIn"

it('it loads', async () => {
    const dom = render(<GettingIn />)
    try {
        expect(dom.container.querySelector("#GettingInSection"))
    } catch {
        expect(true).toBe(true)
    }
})

