import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="/">
        <label className="text-4xl absolute m-[25px]">Name:</label>
        <input
          type="text"
          placeholder="e.g(John Doe)"
          className="absolute bg-transparent w-[80%] h-[50%] mt-[25%] ml-[25px] text-3xl focus:outline-none"
        />
      </form>
    </div>
  );
};

export default ContactForm;
