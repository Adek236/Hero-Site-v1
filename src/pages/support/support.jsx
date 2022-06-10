import React, { useEffect } from 'react';
import './support.css';

function Support(props) {
  
	useEffect(() => {
	  props.setShowHeroBtns(false);
	}, []);
  
  return (
    <div className="support-block">
      <section>
        <h1>Submit a request</h1>
        <h2>We're here to help you!</h2>
      </section>
      <form>
        <label>YOUR EMAIL ADRESS
          <input type="email"></input>
        </label>
        <label>CHOOSE A REQUEST TYPE
           <select>
             <option value="0">-</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
        </label>
        <label>SUBJECT
          <input type="text"></input>
        </label>
        <label>DESCRIPTION
          <textarea></textarea>
        </label>
        <input type="submit" value="SUBMIT"/>
      </form>
    </div>
  );
}

export default Support;