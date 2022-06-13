import React, { useState, useEffect, useRef } from 'react';
import './support.css';


// https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/

function Support(props) {
  const [inputs, setInputs] = useState({
    reqType: "general"
  });
  const reqAlert = useRef(null);
  const supportBlock = useRef(null);

  
  const requestSendedAlert = () => {
    reqAlert.current.style.display = "flex";
    supportBlock.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
    setTimeout(() => {
      reqAlert.current.style.display = "none";
    }, 2000);
  }
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({reqType: "general"});
    requestSendedAlert();
  }
  
	useEffect(() => {
	  props.setShowHeroBtns(false);
	}, []);
  
  return (
    <div ref={supportBlock} className="support-block">
      <section>
        <h1>Submit a request</h1>
        <h2>We're here to help you!</h2>
      </section>
      <div ref={reqAlert} className="support-block__msg">
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
            onInvalid={e => e.target.setCustomValidity('Please enter a valid email. ')}
            onInput={e => e.target.setCustomValidity('')}
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
            pattern="[a-zA-Z]{4,}"
            onInvalid={e => e.target.setCustomValidity('You must write minimum 4 letters. Only alphabet allowed. ')}
            onInput={e => e.target.setCustomValidity('')}
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