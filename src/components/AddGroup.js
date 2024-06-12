import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const groupSchema = yup
  .object({
    groupName: yup.string().min(2).required(),
  })
  .required();

export default function AddGroup() {
  let [grpData, setGrpData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(groupSchema),
  });
  const onSubmit = (formData) => {
    console.log(formData);

    fetch(process.env.REACT_APP_API + "/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        reset();
        fetchData();
        toast("User Added");
      });
  };

  console.log(process.env.REACT_APP_API);

  function fetchData() {
    fetch(process.env.REACT_APP_API + "/groups")
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        setGrpData(value);
      });
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container className="py-3">
      <Row>
        <h1 className="py-3">Add Group</h1>

        <Col xs={6}>
          <form className="border py-4 px-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label for="group" className="mb-1">
                {" "}
                <strong> Group Name </strong>
              </label>
              <input
                type="text"
                placeholder="Enter Group Name"
                className="form-control"
                {...register("groupName")}
              />
              <p>{errors.groupName?.message}</p>
            </div>
            <div lassName="mb-3">
              <button className="btn btn-primary" type="submit">
                {" "}
                Add{" "}
              </button>
            </div>
          </form>
        </Col>

        <Col xs={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Group Name</th>
              </tr>
            </thead>
            <tbody>
              {grpData &&
                grpData.length > 0 &&
                grpData.map((values) => (
                  <tr key={values.id}>
                    <td>{values.id}</td>
                    <td>{values.groupName}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
