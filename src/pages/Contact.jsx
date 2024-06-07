import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ovcvstf", "template_224h7hj", form.current, {
        publicKey: "FIFkV_xpOOK7YTAAh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="pt-20 bg-gray-300 dark:bg-gray-900 text-black dark:text-white p-8" id="contact">
      <div className="grid grid-cols-2 mb-20">
        <div className="">
          <h2 className=" ml-7 mr-2 text-5xl font-bold mb-6">
            Got an opportunity?
          </h2>
          <p className=" ml-7 mr-20 text-xl mb-8">
            Send me a quick email for any software engineering or full stack
            opportunities, I'm eager to continue developing my skills in this rewarding and challenging industry.
          </p>
        </div>
        <div>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 dark:bg-gray-800  border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-100 dark:bg-gray-800  border border-gray-700 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Hit me up
              </button>
              <a
                href="juan.baltazartapia@gmail.com"
                className="ml-4 text-blue-600 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
              >
                juan.baltazartapia@gmail.com
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
