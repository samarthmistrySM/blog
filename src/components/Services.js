import React, { useState, useEffect } from "react";

export default function Services() {
  const [BlogData, setBlogData] = useState([]);

  const url = "http://localhost:4000";

  useEffect(() => {
    fetch(url + "/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!BlogData.length) {
    return <div>Loading...</div>;
  }

  function ShortenText(text) {
    const words = text.split(" ");

    if (words.length > 15) {
      const trimmedWords = words.slice(0, 15);
      const trimmedText = trimmedWords.join(" ") + "...";
      return trimmedText;
    }

    return text;
  }

  return (
      <div className="m-3 mb-0 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between">
        {BlogData.map((blogs) => (
          <div
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700"
          >
            <img
              className="w-full h-40 object-cover rounded-t-lg"
              src={blogs.image}
              alt={blogs.image}
            />
            <div className="p-3 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blogs.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {ShortenText(blogs.content)}
              </p>
              <a
                href="/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
            
          </div>
        ))}
      </div>
  );
}
