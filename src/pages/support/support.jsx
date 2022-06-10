import React, { useState, useEffect } from 'react';
import './support.css';


// https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/

function Support(props) {
  const [inputs, setInputs] = useState({
    reqType: "general"
  });
  const [valErrors, setValErrors] = useState({})
  
  const validationCheck = () => {
    return true;
  }
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (!validationCheck()) return console.log("zle");
    setInputs({reqType: "general"});
    // jesli przejdzie walidacje to resetuje form i wyswietla ze done, jak nie to co poprawic
  }
  
	useEffect(() => {
	  props.setShowHeroBtns(false);
	}, []);
  
  return (
    <div className="support-block">
      <section>
        <h1>Submit a request</h1>
        <h2>We're here to help you!</h2>
      </section>
      <div className="support-block__errors">
        Thanks for request!
      </div>
      <form onSubmit={handleSubmit}>
        <label>YOUR EMAIL ADRESS
          <input 
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
            maxLength="35"
            pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$"
            onInvalid={e => e.target.setCustomValidity('You must write minimum 4 letters. ')}
            required
          />
        </label>
        <label>CHOOSE A REQUEST TYPE
           <select
             name="reqType"
             value={inputs.reqType || "general"} 
             onChange={handleChange}
           >
              <option value="general">General Question</option>
              <option value="report">Report A Player</option>
              <option value="technical">Technical Problem</option>
              <option value="recover">Recover My Account</option>
            </select>
        </label>
        <label>SUBJECT
          <input 
            type="text" 
            name="subject" 
            value={inputs.subject || ""} 
            onChange={handleChange}
            maxLength="35"
            // minLength="4"
            pattern="[a-z].{4,}"
            // onInvalid={e => e.target.setCustomValidity('You must write minimum 4 letters. Only alphabet allowed. ')}
            required 
          />
        </label>
        <label>DESCRIPTION
          <textarea 
            name="desc" 
            value={inputs.desc || ""} 
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <input type="submit" value="SUBMIT"/>
      </form>
    </div>
  );
}

export default Support;