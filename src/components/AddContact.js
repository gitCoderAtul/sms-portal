import React from 'react'
import { Col, Container, Row, Table } from "react-bootstrap";


export default function AddContact() {
  return (
    <Container className="py-3">
    <Row>
      <h1 className="py-3">Add Contact</h1>

      <Col xs={6}>
      <form className="border py-4 px-3">
      <div className="mb-3">
          <label for="group" className="mb-1"> <strong> Select Group </strong></label>
          <select className='form-control'>
            <option>-- Group Name --</option>
            <option> Family </option>
            <option> Friends </option>
          </select>
        </div>
        <div className="mb-3">
          <label for="person name" className="mb-1"> <strong> Person Name </strong></label>
          <input
            type="text"
            placeholder="Enter Person Name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label for="mobile no." className="mb-1"> <strong> Mobile No. </strong></label>
          <input
            type="text"
            placeholder="Enter Mobile No."
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label for="email id" className="mb-1"> <strong> Email Id </strong></label>
          <input
            type="text"
            placeholder="Enter Email Id"
            className="form-control"
          />
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
              <th>Group Name</th>
              <th>Person Name</th>
              <th>Mobile No.</th>
              <th> Email Id</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 </td>
              <td> Family</td>
              <td> Ram Siya</td>
              <td> 8655530236</td>
              <td> ramsiya@gmail.com</td>
            </tr>
            <tr>
              <td>1 </td>
              <td> Family</td>
              <td> Ram Siya</td>
              <td> 8655530236</td>
              <td> ramsiya@gmail.com</td>
            </tr>
            <tr>
              <td>1 </td>
              <td> Family</td>
              <td> Ram Siya</td>
              <td> 8655530236</td>
              <td> ramsiya@gmail.com</td>
            </tr>
            
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
  )
}
