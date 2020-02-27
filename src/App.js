import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import UserCard from './UserCard';

function App() {

  const [memberList] = useState([
    { 
      name: "Hasan",
      email: "h@lambda.com",
      role: "back end dev" 
      },
    { 
      name: "Amin",
      email: "a@lambda.com",
      role: "front end dev" 
      },
    { 
      name: "Maryam",
      email: "m@lambda.com",
      role: "data scientist" 
      },
    ]);

  const [formData, setFormData] = useState (
    {
      name: "",
      email: "",
      role: ""
    }
  );

  const handleChange = event => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    memberList.push(formData)
    setFormData({
      name: "",
      email: "",
      role: ""
    })

    event.preventDefault()

    console.log(memberList)
    console.log(formData)

  }

  return (
    <div className="App">
      <h2>Team List</h2>
      <div>
        {memberList.map(m => {
          return (
            <UserCard
              name={m.name}
              email={m.email}
              role={m.role}
            />
          );
        })}
      </div>
      <Form 
        data={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
