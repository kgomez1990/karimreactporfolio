
import React, { useState } from "react";
import { validateEmail } from "../utils/helpers"

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (name.length === 0) {
            alert("Please enter a name");
            return;
        }

        if (email.length === 0) {
            alert("Please enter a Email");
            return;
        }

        if (message.length === 0) {
            alert("Please enter a Message");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid Email")
        }

        setMessage('');
        setName('');
        setEmail('');
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="col-12 col-md-6">
                <h1>Contact</h1>
                <form action="POST">
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={name}
                    />
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={email}
                    />
                    <input
                        className="form-control"
                        type="text"
                        name="message"
                        placeholder="Enter Message"
                        onChange={handleInputChange}
                        value={message}
                    />
                    <button type="submit" onClick= { handleFormSubmit }>Submit</button>
                </form>
            </div>
        </div>
    );
}