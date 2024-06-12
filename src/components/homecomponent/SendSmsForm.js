import React from 'react'
import { useSelector } from 'react-redux'

export default function SendSmsForm() {
const contactData = useSelector((state)=>state.contact.value)

console.log(contactData);

  return (
    <section>
        <h2>Send SMS Form</h2>
        <form>
            <div className='mb-2'>
            <input type='text' className='form-control' placeholder='User Name' defaultValue={contactData[0]} />
            </div>
            <div className='mb-2'>
            <input type='text' className='form-control' placeholder='Mobile No.' defaultValue={contactData[1]} />
            </div>
            <div className='mb-2'>
            <input type='text' className='form-control' placeholder='Email Id' defaultValue={contactData[2]} />
            </div>
            <div className='mb-2'>
             <textarea placeholder='Message' className='form-control'></textarea>
             </div>
            <div className='mb-2'>
             <button className='btn btn-primary'> Send </button>
             </div>

        </form>
        </section>
  )
}
