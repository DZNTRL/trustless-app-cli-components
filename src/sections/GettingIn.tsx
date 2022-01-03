import React, { useState } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { Routes, Route, Link } from "react-router-dom";
import { StateManager } from "pro-web-app-cli-state-manager"
import CreateAccount from "../pages/GettingIn/CreateAccount"
import Login from "../pages/GettingIn/Login"
import Redirect from "../components/Shared/Redirect"
import { IAllState } from "../IAllState"


const GettingIn: React.FunctionComponent = () => {
    const { username, currentUser } = useSelector((state: IAllState) => {
        return { 
            username: state.User.username,
            currentUser: state.User.currentUser
        }
    })
    const [active, setActive] = useState<"create" | "login">("create")
    if(typeof window === "undefined") return <></>
    if(currentUser) return <Redirect url={"/session-board"} />
    return <Router>
        <div>
            <Nav activeKey="/" onSelect={(key) => setActive(key as "create" | "login")}>
                <Nav.Item>
                    <Link to="/">Create Account</Link>
                </Nav.Item>
                &nbsp;
                <Nav.Item>
                    <Link to="/login">Login</Link>
                </Nav.Item>
            </Nav>
        </div>
        <Routes>            
            <Route path="/" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
}

export default GettingIn