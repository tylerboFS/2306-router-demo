import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    alert(`Thank you for submitting:
    ${name}
    ${email}
    ${phone}`);
  };

  return (
    <>
      <h1>Contact</h1>

      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Contact;
