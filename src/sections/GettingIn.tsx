import React from "react"
import { Tabs, Tab} from "react-bootstrap"
import CreateAccount from "../pages/GettingIn/CreateAccount"
import Login from "../pages/GettingIn/Login"
const GettingIn: React.FunctionComponent = () => {
    return <>
        {/* <Tabs id="GettingInSection" defaultActiveKey="login" className="mb3">
            <Tab eventKey="login" title="login">
                <Login />
            </Tab>
            <Tab eventKey="create" title="create">
                <CreateAccount />
            </Tab>
        </Tabs> */}
        <Login />
    </>
}

export default GettingIn