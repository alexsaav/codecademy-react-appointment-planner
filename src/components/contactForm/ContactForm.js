import React from "react";

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="name"
            value={name} 
            onChange={(e) => setName(e.currentTarget.value)} 
            required
            placeholder="Contact Name"
            /> 
            <input 
            type="tel" 
            name="phone"
            value={phone} 
            onChange={(e) => setPhone(e.currentTarget.value)} 
            required
            placeholder="Contact Phone (###-###-####)"
            // regex is for UK phone numbers
            pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$"
            />
            <input 
            type="email" 
            name="email"
            value={email} 
            onChange={(e) => setEmail(e.currentTarget.value)} 
            required
            placeholder="Contact Email"
            />
            <input type="submit" value="Add Contact" />
        </form>
    );
};

