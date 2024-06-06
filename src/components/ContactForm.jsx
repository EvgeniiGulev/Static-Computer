/**
 * Author: Evgenii Gulev
 * Description: This file defines the 'ContactForm' component which allows users to send messages via email using the EmailJS service.
 * Date/Time: 2024-06-06
 */

import emailjs from "@emailjs/browser";
import React, { useState } from "react";

// Define the ContactForm component
const ContactForm = ({ onClick }) => {
  // State variables for form inputs and submission status
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    // Send email using EmailJS
    emailjs
      .send(
        // EmailJS service ID from environment variables
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // EmailJS template ID from environment variables
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Your Name",
          from_email: form.email,
          to_email: "yourmail@yourdomain.com",
          message: form.message,
        },
        // EmailJS public key from environment variables
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // Set submission status to true and reset form inputs
        setIsSent(!isSent);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Render the ContactForm component
  return (
    <div className="absolute p-2 w-full h-full overflow-y-scroll ">
      <h1 className="text-2xl highlight-item font-bold">Contact Me!</h1>
      <hr className="line-break my-[7px]" />
      {/* Form for user input */}
      <form onSubmit={handleSubmit}>
        <label className="font-semibold">Name: </label>
        {/* Input field for name */}
        <input
          type="text"
          placeholder="John Doe"
          className="bg-transparent focus:outline-none"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <label className="font-semibold">Email: </label>
        {/* Input field for email */}
        <input
          type="email"
          placeholder="johndoe@example.com"
          className="bg-transparent focus:outline-none"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <label className="font-semibold">Message: </label>
        {/* Textarea for message */}
        <textarea
          className={`p-1.5 bg-transparent border-white border focus:border-white focus:outline-none w-[97.5%]`}
          cols="28"
          rows="3"
          name="message"
          value={form.message}
          onChange={handleInputChange}
          placeholder="Enter your message..."
          required
        />
        {/* Submit button */}
        <button
          type="submit"
          className="text-center w-[97.5%] bg-[#ffe900] text-black font-bold py-1 px-2 text-sm hover:bg-[#ffc800] transition duration-200"
        >
          {!isSent ? "Submit" : "Sending..."}
        </button>
      </form>
      {/* Return home link */}
      <p
        className="mt-2 text-lg font-bold text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out cursor-pointer"
        onClick={() => onClick("home")}
      >
        › Return Home
      </p>
    </div>
  );
};

export default ContactForm;
