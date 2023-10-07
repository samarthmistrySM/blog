import React from "react";

const Card = ({ blogs, index, setReadData, setReadMode, onReadMoreClick }) => {
  const handleCLick = () => {
    setReadMode(true);
    setReadData(() => blogs._id);
    console.log("blog clicked");
  };
  function truncate(str) {
    return str.length > 15 ? str.substring(0, 15) + "..." : str;
  }
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 blog-card"
      key={index}
    >
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={blogs.image}
        alt={blogs.image}
      />
      <div className="p-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blogs.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncate(blogs.content)}
        </p>
        <button
          onClick={() => {
            handleCLick();
            onReadMoreClick(); // Call the function to open the modal
          }}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Card;
