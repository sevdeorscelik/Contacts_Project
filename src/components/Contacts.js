import React from "react";
import { useState, useEffect } from "react";
import List from './List'
import Form from "./Form";
import '../styles/contacts.css'


function Contacts() {

    //kayitlarin eklenecegi state:
    const[contacts, setContacts] = useState([
        {
            fullname:'Max Mustermann',
            phone_number:'+49 12345678900'
        },{
            fullname:'Sevde Örscelik',
            phone_number:'017630458794'
        },{
            fullname:'Semih Örscelik',
            phone_number:'05694123687'
        }
    ])

    /*
    useEffect(() => {
        console.log(contacts);
    },[contacts])
    */

    return(
        <div id="container">
           
           <Form addContact ={setContacts} contacts={contacts} />
           <List contacts={contacts} />
        </div>
    )
}

export default Contacts