import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { shareContactData } from '../../redux/slices/contactSlice';

export default function ShowContact() {
    let [contactData, setContactData] = useState(null);

    const groupId = useSelector((state) => state.group.value)
    console.log(groupId);
 
    let dispatch = useDispatch();
    
      useEffect(() => {

        if(groupId != ''){ 
        let apiPath =  process.env.REACT_APP_API + "/contacts?userGroup=" + groupId;
        console.log(apiPath); 
        
          fetch(apiPath)
            .then((res) => res.json())
            .then((values) => {
              console.log(values);
              setContactData(values);
            });
        }
       
      }, [groupId]);

      function fncCntData(name,mobile,emailId){
        var details = [name,mobile,emailId]
        alert('array details',details);
        dispatch(shareContactData(details))

      }
       

  return (
    <section>
        <h2> Contact </h2>
        <ul>
            {
                    contactData && contactData.length >0 && contactData.map(value=>

                        <li key={value.id} onClick={()=>{fncCntData(value.userName,value.mobileNo,value.emailId)}}>{value.userName}</li>
                    )
            }
        </ul>
    </section>
  )
}
