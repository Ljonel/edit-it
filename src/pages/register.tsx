import React, { SyntheticEvent, useState } from "react";
import { Form } from "../styles/RegisterStyles/RegisterStyles";
import IUserRegistration from "../interfaces/IUserRegistration";

const Register = () => {
  const [formData, setFormData] = useState<IUserRegistration>({
    username: "",
    name: "",
    lastname: "",
    email: "",
    id: "",
  });

  async function createUser(data: IUserRegistration) {
    try {
      fetch("http://localhost:3000/api/createUser", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      setFormData({ username: "", name: "", lastname: "", email: "", id: "" });
    } catch (error) {
      console.log("Sth wrong", error);
    }
  }

  const handleSubmit = async (data: IUserRegistration) => {
    try {
      createUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Zarejestruj się</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
          value={formData.lastname}
          placeholder="Lastname"
        />
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          value={formData.username}
          placeholder="Username"
        />
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          placeholder="Email"
        />
        <button type="submit">Register</button>
      </Form>
    </>
  );
};

export default Register;
