import {render} from "@testing-library/react"
import Login from './Login'

test("on entering username", () => {
    render(<Login/>)

    screen.debug()
})