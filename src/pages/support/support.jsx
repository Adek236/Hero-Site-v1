import React, { useState, useEffect } from 'react';
import './support.css';

function Support(props) {
  const [inputs, setInputs] = useState({});

  const validationCheck = (name, value) => {
    
  }
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // if (!validationCheck(name, value)) return console.log("zle");
    setInputs(values => ({...values, [name]: value}))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
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
      <form onSubmit={handleSubmit}>
        <label>YOUR EMAIL ADRESS
          <input 
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
            required
          />
        </label>
        <label>CHOOSE A REQUEST TYPE
           <select
             name="reqType" 
             value={inputs.reqType = "general" || ""} 
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