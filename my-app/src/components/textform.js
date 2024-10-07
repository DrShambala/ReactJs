import React from 'react'
import { useState } from 'react';
export default function Textform(props) {

  const [text, settext] = useState('')
  const changetxt = (event)=>{
    settext(event.target.value)
  }
  function toUppercase(){
    settext(text.toUpperCase())
  }
  function tolowercase(){
    settext(text.toLowerCase())
  }
  function toclear(){
    settext('')
  }

  function extractEmails(text) {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/g;

    const emails = text.match(emailPattern);

    return emails || [];
}
// Example usage
const emails = extractEmails(text);
console.log(emails);  // Output: ['test@example.com', 'another.email@domain.org']

  return (
    <>
        <div >
            <div className="mb-3">
            <label htmlFor="myText" className="form-label">TEXT CONVERTER</label>
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="exampleFormControlTextarea1" value={text} onChange={changetxt} rows="5" placeholder='enter text' ></textarea>
            </div>
            <button type="button" className="btn btn-outline-success mx-2" onClick={toUppercase}>Convert to UPPER CASE</button>
            <button type="button" className="btn btn-outline-success mx-2" onClick={tolowercase}>Convert to lower case</button>
            <button type="button" className="btn btn-outline-primary mx-2" onClick={toclear}>Clear</button>
        </div>
        <div className="container" data-bs-theme="dark">
        <h1>your text summery</h1>
        <p className='fs-3'>{text.split(' ').length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p className='fs-8'> {text}</p>
        <h3>Emails in the text</h3>
        <p className='fs-8'> {emails}</p>
        </div>
        </>
  ) 
}
