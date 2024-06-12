import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

export default function AddLibrary() {
  return (
    <Container className="py-3">
      <Row>
        <h1 className="py-3">Add Library</h1>

        <Col xs={6}>
        <form className="border py-4 px-3">
          <div className="mb-3">
            <label for="library" className="mb-1"> <strong> Library Name </strong></label>
            <input
              type="text"
              placeholder="Enter Library Name"
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
                <th>Library Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Diwali</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Holi</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Ganesh Chaturthi</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Shi Jayanti</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
