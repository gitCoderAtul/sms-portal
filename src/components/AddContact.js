import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";

export default function AddContact() {
  let [userData, setUserData] = useState(null);
  let [contactData, setContactData] = useState(null);

  const formik = useFormik({
    initialValues: {
      userName: "",
      mobileNo: "",
      emailId: "",
      userGroup: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(4, "Must be 15 characters or less")
        .required("Required User Name"),
      mobileNo: Yup.string()
        .max(10, "Must be 10 number")
        .required("Required Mobile Number"),
      emailId: Yup.string()
        .email("Invalid email address")
        .required("Required Email Id"),
      userGroup: Yup.string().required("Required User Group"),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      fetch(process.env.REACT_APP_API + "/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((value) => {
          console.log(value);
          fetchData();
          toast("User Added Contact Details");
        });

      console.log(values);
    },
  });

  function fetchData() {
    try {
      fetch(process.env.REACT_APP_API + "/contacts")
        .then((res) => res.json())
        .then((value) => {
          console.log(value);
          setContactData(value);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API + "/groups")
        .then((res) => res.json())
        .then((value) => {
          console.log(value);
          setUserData(value);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container className="py-3">
      <Row>
        <h1 className="py-3">Add Contact</h1>

        <Col xs={6}>
          <form className="border py-4 px-3" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label for="group" className="mb-1">
                {" "}
                <strong> Select Group </strong>
              </label>
              <select
                className="form-control"
                id="userGroup"
                name="userGroup"
                onChange={formik.handleChange}
              >
                <option value="">-- Select Group Name --</option>
                {userData &&
                  userData.map((value) => (
                    <option value={value.id}>{value.groupName}</option>
                  ))}
              </select>
              {formik.touched.userGroup && formik.errors.userGroup ? (
                <div>{formik.errors.userGroup}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label for="user name" className="mb-1">
                {" "}
                <strong> User Name </strong>
              </label>
              <input
                type="text"
                placeholder="Enter User Name"
                className="form-control"
                id="userName"
                name="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div>{formik.errors.userName}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label for="mobile no." className="mb-1">
                {" "}
                <strong> Mobile No. </strong>
              </label>
              <input
                type="text"
                placeholder="Enter Mobile No."
                className="form-control"
                id="mobileNo"
                name="mobileNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobileNo}
              />
              {formik.touched.mobileNo && formik.errors.mobileNo ? (
                <div>{formik.errors.mobileNo}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label for="email id" className="mb-1">
                {" "}
                <strong> Email Id </strong>
              </label>
              <input
                type="text"
                placeholder="Enter Email Id"
                className="form-control"
                id="emailId"
                name="emailId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.emailId}
              />
              {formik.touched.emailId && formik.errors.emailId ? (
                <div>{formik.errors.emailId}</div>
              ) : null}
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

                <th>Person Name</th>
                <th>Mobile No.</th>
                <th> Email Id</th>
                <th>Group Name</th>
              </tr>
            </thead>
            <tbody>
              {contactData &&
                contactData.length > 0 &&
                contactData.map((values, index) => (
                  <tr key={values.id}>
                    <td>{index}</td>
                    <td>{values.userName}</td>
                    <td>{values.mobileNo}</td>
                    <td>{values.emailId}</td>
                    <td>{values.userGroup}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
