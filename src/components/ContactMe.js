import React, { useState, useEffect } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    selectedPerson: "",
  });
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const peopleData = await response.json();
        setPeople(peopleData.results);
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };

    fetchPeople();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitted Data:", formData);
    } catch (error) {
      console.error("Error during Contact Me API:", error);
    }
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      selectedPerson: "",
    });
  };

  return (
    <form className="form">
      <label>
        First Name:
        <input
          className="box"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          className="box"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          className="box"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          className="box"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <label>
        Select your favorite Person:
        <select
          className="box"
          name="selectedPerson"
          value={formData.selectedPerson}
          onChange={handleChange}
        >
          <option value="">Select a person</option>
          {people.map((person) => (
            <option key={person.name} value={person.name}>
              {person.name}
            </option>
          ))}
        </select>
      </label>
      <button className="submit" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ContactMe;
