import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify";

const librarySchema = yup
  .object({
    libraryName: yup.string().min(4,'Library name must have atleast 4 character').required(),
     
  })
  .required()

export default function AddLibrary() {
  let [libData,setLibData] = useState(null);
  
  const { register, handleSubmit,formState: { errors },reset } = useForm({
    resolver: yupResolver(librarySchema),
  })

  const onSubmit = (formdata) => {
    console.log(formdata);
    
    fetch(process.env.REACT_APP_API + "/libraries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
    .then((res) => res.json())
      .then((value) => {
        console.log(value);
      reset();
      fetchData();
      toast("User Added Library Name");
    })
  }

  console.log(process.env.REACT_APP_API);
  function fetchData(){
    try{
      fetch(process.env.REACT_APP_API+'/libraries')
      .then(res=>res.json())
      .then(value=>{
        console.log(value);
        setLibData(value)
      })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
      fetchData()
  },[])
  return (
    <Container className="py-3">
      <Row>
        <h1 className="py-3">Add Library</h1>

        <Col xs={6}>
        <form className="border py-4 px-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label for="library" className="mb-1"> <strong> Library Name </strong></label>
            <input
              type="text"
              placeholder="Enter Library Name"
              className="form-control"
              {...register("libraryName")}
            />
            <p>{errors.libraryName?.message}</p>
          </div>
          <div className="mb-3">
          <button className="btn btn-primary" type="submit"> Add </button>
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
               {
                libData && libData.length>0 && libData.map(value=>
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.libraryName}</td>
                  </tr>
                )
               }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
