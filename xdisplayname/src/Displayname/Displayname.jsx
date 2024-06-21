import { useState } from "react";

const Home = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState("");
    
    const HandleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const HandleLastName = (e) => {
        setLastName(e.target.value);
    }

    const HandleSubmit = () => {
        // e.preventDeafault();
        // setFullName(`${firstName} ${lastName}`);
        if (!firstName || !lastName) {
          } else {
            setFullName(`${firstName} ${lastName}`);
            setError('');
          }
    }

    return (
        <div>
            <h1>Full Name Display</h1>
            <div>
            <label>First Name:     
            <input type="text" value={firstName} onChange={HandleFirstName} required /></label> 
            </div>
            
            <div>
            <label> Last Name:
            <input type="text" value={lastName} onChange={HandleLastName} required /></label>
            </div>

            <button onClick={HandleSubmit} >Submit</button>

      {fullName && (
        <div>
            <div>Full Name:{fullName}</div>
          {/* <h2>Full Name: {fullName}</h2> */}
        </div>
      )}
        </div>
    );
}
export default Home;