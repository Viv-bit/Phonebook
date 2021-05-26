import {React, useState} from 'react';
import { Link } from "react-router-dom";
import Empty from './empty';

function ContactList() {

    const initContact = localStorage.getItem('contacts')
    ? JSON.parse(localStorage.getItem('contacts'))
    : [];

    const [contacts] = useState(initContact);

        if(contacts.length === 0) {
            return (
                <div>
                    <Empty />
                    <Link to="/add-contact">
                      <button className="linkBtn">ADD CONTACT</button>
                    </Link>
                </div>
            )
        }else {
            return (
                <div>
                {
                    contacts.map((contact) => {
                    return <div className="contactLists container">
                                <div className="contactList">
                                    <h3 className="contactListTitle">NAME</h3>
                                    <p className="contactListObj">{contact.fullName}</p>
                                </div>

                                <div className="contactList">
                                    <h3 className="contactListTitle">EMAIL</h3>
                                    <p className="contactListObj">{contact.email}</p>
                                </div>

                                <div className="contactList">
                                    <h3 className="contactListTitle">PHONE NUMBER</h3>
                                    <p className="contactListObj">{contact.number}</p>
                                </div>

                                <div className="contactList">
                                    <h3 className="contactListTitle">ADDRESS</h3>
                                    <p className="contactListObj">{contact.address}</p>
                                </div>

                                <div className="contactList">
                                    <h3 className="contactListTitle">LOCATION COORDINATE</h3>
                                    <p className="contactListObj">{contact.longitude}, {contact.latitude}</p>
                                </div>
                        </div>
                    })
                }
                    

                    <Link to="/add-contact">
                      <button className="linkBtn">ADD CONTACT</button>
                    </Link>
                </div>
                
            )
        }
    
}
export default ContactList;