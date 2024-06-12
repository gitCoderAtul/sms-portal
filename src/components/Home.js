import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ShowGroup from './homecomponent/ShowGroup'
import ShowContact from './homecomponent/ShowContact'
import ShowLibrary from './homecomponent/ShowLibrary'
import ShowMessage from './homecomponent/ShowMessage'
import SendSmsForm from './homecomponent/SendSmsForm'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={4}>
      <ShowLibrary></ShowLibrary>
      <ShowMessage></ShowMessage>
        </Col>
        <Col xs={4}>
        <SendSmsForm></SendSmsForm>
        </Col>
        <Col xs={4}>
           <ShowGroup></ShowGroup>
           <ShowContact></ShowContact>
        </Col>
      </Row>
    </Container>
  )
}
