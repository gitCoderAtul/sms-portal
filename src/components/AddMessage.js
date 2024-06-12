import React from 'react'
import { Col, Container, Row, Table } from "react-bootstrap";


export default function AddMessage() {
  return (
    <Container className="py-3">
    <Row>
      <h1 className="py-3">Add Message</h1>

      <Col xs={6}>
      <form className="border py-4 px-3">
        <div className="mb-3">
          <label for="group" className="mb-1"> <strong> Select Library </strong></label>
          <select className='form-control'>
            <option>-- Library Name --</option>
            <option> Diwali </option>
            <option> Holi</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="group" className="mb-1"> <strong> Message </strong></label>
           <textarea className='form-control'></textarea>
        </div>
        <div lassName="mb-3">
        <button className="btn btn-primary"> Add </button>
        </div>
        </form>
      </Col>

      <Col xs={6}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th style={{'width':'150px'}}>Library Name</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
             <tr>
              <td>1</td>
              <td>Diwali</td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </td>
             </tr>
             <tr>
              <td>2</td>
              <td>Holi</td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</td>
             </tr>
            
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
  )
}
