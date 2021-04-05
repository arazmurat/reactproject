import React from "react";
import contacts from "../contacts";
import Card from "./Card";
export default function App() {
  console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => {
        return (
          <Card
            key={contact.name}
            name={contact.name}
            img={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}
