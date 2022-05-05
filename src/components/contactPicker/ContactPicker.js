import React from "react";

export const ContactPicker = (props) => {
    const contacts = props.contacts;

    return (
        <select onChange={props.onChange} >
            <option key="" value={""} defaultValue="selected">No contact selected</option>
            {contacts.map((contact, i) => {
                return (
                    <option key={i} value={contact.name} >
                        {contact.name}
                    </option>
                )
            })}
        </select>
    );
};
