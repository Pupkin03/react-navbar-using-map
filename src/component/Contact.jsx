// import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const contacts = useSelector((state) => state.contact.contacts);
  console.log("contacts", contacts);
  return (
    <div>
      {contacts.map((contact) => (
        <div
          key={contact.name}
          style={{ border: "solid #eaeaea", width: "300px", padding: "24px" }}
        >
          <img src={contact.image} alt="" height="300px" />
          <h5>{contact.job_title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Contact;
