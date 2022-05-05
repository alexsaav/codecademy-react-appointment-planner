import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    let [ duplicate, setDuplicate ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Add contact info and clear data if the contact name is not a duplicate
        if(!duplicate) {
        addContact(name, phone, email);
        //Reset the contact info state variables to their default state
        setName('');
        setPhone('');
        setEmail('');
        }
    };

    //Check for duplicates
    useEffect(() => {
        if(contacts.some((contact) => contact.name === name)) {
            return setDuplicate(true);
        }
     }, [name, contacts, duplicate]);

    return (
        <div>
            <section>
                <h2>Add Contact</h2> 
                <ContactForm 
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                handleSubmit={handleSubmit}  />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList tiles={contacts} />
            </section>
        </div>
    );
};
