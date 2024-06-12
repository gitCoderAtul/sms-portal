import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function ShowMessage() {
let [messageData, setMessageData] = useState(null);

const libId = useSelector((state)=>state.library.value); 

console.log(libId);

  // use effects
  useEffect(()=>{
     
    if(libId != ''){ 
      let apiPath =  process.env.REACT_APP_API + '/message?libraryName=' +libId;
      console.log(apiPath); 
      
        fetch(apiPath)
          .then((res) => res.json())
          .then((values) => {
            console.log(values);
            setMessageData(values);
          });
      }


  },[libId])
  
  return (
    <section>
    <h2> Messages </h2>
    <ul>
    {
            messageData && messageData.length>0 && messageData.map(value=>
            <li key={value.id} onClick={()=>{fncLib(value.id)}}>{value.txtMessage}</li>
            )
     }
     </ul>
</section>    
  )
}
