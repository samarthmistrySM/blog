import React, { useState } from "react";
import axios from "axios";

export default function PostBlog({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    date: "",
    author: "",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    const date = `${year}-${month}-${day}`;
    
    

    if (name === "tags") {
      const tagsArray = value.split(" ");
      setFormData({
        ...formData,
        [name]: tagsArray,
        image: `https://source.unsplash.com/800x600/?${tagsArray[0]}`,
        date: date,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/blogs", formData)
      .then((response) => {
        console.log(response.data);
        window.alert("Blog successfully posted")
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white dark:bg-gray-900 w-3/4 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6 text-gray-900 dark:text-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border dark:bg-gray-800 rounded c w-full py-2 px-3"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700  dark:text-white"
                htmlFor="content"
              >
                Content:
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="border dark:bg-gray-800 rounded w-full py-2 px-3"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white"
                htmlFor="author"
              >
                Author:
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="border dark:bg-gray-800 rounded w-full py-2 px-3"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white"
                htmlFor="tags"
              >
                Tags:
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags.join(" ")} // Convert tags array back to a space-separated string
                onChange={handleChange}
                className="border dark:bg-gray-800 rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white"
                htmlFor="image"
              >
                image:
              </label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="https://source.unsplash.com/800x600/?"
                value={formData.image}
                onChange={handleChange}
                className="border  rounded w-full py-2 px-3"
                disabled
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Create Post
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 hover-bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
