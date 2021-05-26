import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";

function AddContact() {
    const history = useHistory();

    
    
    const initContact = {
        fullName: "",
        number: "",
        email: "",
        address: "",
        longitude: "",
        latitude: ""
    };
    const [contact, setContact] = useState(initContact);
  
    const handleChange = (e) => {
        setContact({
          ...contact,
          [e.target.name]: e.target.value,
        });
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!contact.fullName || !contact.number || !contact.email || !contact.address || !contact.longitude || !contact.latitude) {
            return (
                <h3>Kindly complete the form</h3>
            )} else {
                const contacts = localStorage.getItem('contacts')
    ? JSON.parse(localStorage.getItem('contacts'))
    : [];
               localStorage.setItem('contacts',JSON.stringify([...contacts, contact]));
               history.push("/");

            }
        };
    

    return (
        <div>
            <Link to="/" className="back"> Back</Link>

            <form className="addContactForm"
                 onSubmit={handleSubmit}
                >
                <span className="inputSection">
                    <label>Name</label>
                    <input 
                        className="inputField" 
                        type="text" 
                        name="fullName"
                        onChange={handleChange}
                        value={contact.fullName}
                        >
                    </input>
                </span>
                <span className="miniInput">
                    <span className="inputSection">
                        <label>Phone Number</label>
                        <input 
                            className="inputField miniInputField" 
                            type="text" 
                            name="number"
                            onChange={handleChange}
                            value={contact.number}
                            >
                        </input>
                    </span>
                    
                    <span className="inputSection">
                        <label>Email</label>
                        <input 
                            className="inputField miniInputField" 
                            type="text" 
                            name="email"
                            onChange={handleChange}
                            value={contact.email}
                            >
                        </input>
                    </span>
                </span>
                
                
                <span className="inputSection">
                    <label>Address</label>
                    <input 
                        className="inputField addressInput" 
                        type="text" 
                        name="address"
                        onChange={handleChange}
                        value={contact.address}
                        >
                    </input>
                </span>
                
                <span className="miniInput">
                    <span className="inputSection">
                        <label>Longitude</label>
                        <input 
                            className="miniInputField inputField" 
                            type="text" 
                            name="longitude"
                            onChange={handleChange}
                            value={contact.longitude}
                            >
                        </input>
                    </span>
                    
                    <span className="inputSection">
                        <label>Latitude</label>
                        <input 
                            className="miniInputField inputField" 
                            type="text" 
                            name="latitude"
                            onChange={handleChange}
                            value={contact.latitude}
                            >
                        </input>
                    </span>
                </span>
                
                
                <button className="submit">Submit</button>
            </form>
        </div>
        
    )
}
export default AddContact;