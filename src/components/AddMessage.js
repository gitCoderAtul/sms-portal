import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from "react-bootstrap";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

export default function AddMessage() {
let [libraryData,setLibraryData]= useState([]);
let [messageData, setMessageData] = useState(null);

//formik
const formik = useFormik({
  initialValues: {
    libraryName: '',
    txtMessage: '', 
  },
  validationSchema: Yup.object({
    libraryName: Yup.string().required('Required'),
    txtMessage: Yup.string().min(4,'Must be 4 characters').max(80, 'Must be 80 characters or less').required('Required'), 
  }),
  onSubmit: values => {
    // alert(JSON.stringify(values, null, 2));
    console.log(values);
    try{
      fetch(process.env.REACT_APP_API+'/message',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          "Content-Type": "application/json",
        },
      })
      .then(res=>res.json())
      .then(value=>{
        console.log(value);
       fetchData();
        toast("User Added Message");
      })

    }catch(error){
      console.log(error);
    }
  },
});

//function
function fetchData(){
  try{
    fetch(process.env.REACT_APP_API+'/message')
    .then(res=>res.json())
    .then(value=>{
      console.log(value);
      setMessageData(value)

    })
  }catch(error){
    console.log(error);
  }
}
// use effects
useEffect(()=>{
  fetchData()
},[])
  useEffect(()=>{
    try{
      fetch(process.env.REACT_APP_API+'/libraries')
      .then(res=> 
        res.json()
        // console.log(res)
         )
        .then(value=>{
          console.log(value);
          setLibraryData(value)
        })
    }catch(error){
      console.log(error);
    }
  },[])

  return (
    <Container className="py-3">
    <Row>
      <h1 className="py-3">Add Message</h1>

      <Col xs={6}>
      <form className="border py-4 px-3" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label for="group" className="mb-1"> <strong> Select Library </strong></label>
          <select className='form-control'
          id="libraryName"
          name="libraryName"
          onChange={formik.handleChange}>
            <option value=''>--  Select Library Name --</option>
             {
              libraryData && libraryData.length > 0 && libraryData.map((value)=>
                <option value={value.id} key={value.id}> {value.libraryName}</option>
              )
             }
          </select>
          {formik.touched.libraryName && formik.errors.libraryName ? (
         <div>{formik.errors.libraryName}</div>
       ) : null}
        </div>
        <div className="mb-3">
          <label for="group" className="mb-1"> <strong> Message </strong></label>
           <textarea className='form-control'
            id="txtMessage"
            name="txtMessage"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.txtMessage}
           ></textarea>
           {formik.touched.txtMessage && formik.errors.txtMessage ? (
         <div>{formik.errors.txtMessage}</div>
       ) : null}
        </div>
        <div lassName="mb-3">
        <button className="btn btn-primary" type='submit'> Add </button>
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
             {
                messageData && messageData.length > 0 && messageData.map((value,index)=>
                <tr key={value.id}>
                  <td> {index} </td>
                  <td> {value.libraryName} </td>
                  <td> {value.txtMessage} </td>
                </tr>
                )
             }
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
  )
}
