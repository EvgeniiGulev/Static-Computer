import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const ContactForm = ({ onClick }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Your Name",
          from_email: form.email,
          to_email: "yourmail@yourdomain.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSent(!isSent);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="absolute p-2 w-full h-full overflow-y-scroll ">
      <h1 className="text-2xl highlight-item font-bold">Contact Me!</h1>
      <hr className="line-break my-[7px]" />
      <form onSubmit={handleSubmit}>
        <label className="font-semibold">Name: </label>
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
        <button
          type="submit"
          className="text-center w-[97.5%] bg-[#ffe900] text-black font-bold py-1 px-2 text-sm hover:bg-[#ffc800] transition duration-200"
        >
          {!isSent ? "Submit" : "Sending..."}
        </button>
      </form>
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
