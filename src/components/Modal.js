import React from 'react';
import { format } from 'date-fns';

const Modal = ({ isOpen, onClose, blog }) => {
  if (!isOpen) return null;

  const formattedDate = format(new Date(blog.date), 'MMMM dd, yyyy');
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-3/4 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="my-4 mx-auto max-h-64 w-auto"
            />
          )}
          <p className="text-gray-700 my-2">{blog.content}</p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-gray-500">Date: {formattedDate}</p>
              <p className="text-gray-500">Author: {blog.author}</p>
            </div>
            {blog.tags && (
              <div className="flex space-x-2">
                <p className="text-gray-500">Tags:</p>
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
