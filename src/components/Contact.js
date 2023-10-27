import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    // console.log(formData);
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/contact", formData)
      .then((response) => {
        console.log(response.data);
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <>
      <section className="bg-gray-200 mt-2 dark:bg-gray-800 text-center">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleInputChange}
                value={formData.email}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                onChange={handleInputChange}
                value={formData.subject}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                onChange={handleInputChange}
                value={formData.message}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit" onClick={handleSubmit}
              className="text-gray-900 bg-gray-400 hover:bg-gray-300  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
