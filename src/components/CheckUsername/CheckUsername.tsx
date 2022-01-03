import React from "react"
import { Col, Row } from "react-bootstrap"
import Input from "./Input"
import UsernameStatus from "./UsernameStatus"


const CheckUsername: React.FunctionComponent = () => {
    return <Row>
        <Col md={10} sm={9} xs={9} lg={10}>
            <Input />
        </Col>
        <Col md={2} sm={3} xs={3} lg={2}>
            <UsernameStatus />
        </Col>
    </Row>

}

export default CheckUsername