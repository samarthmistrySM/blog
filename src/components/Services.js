import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Card from "./Card";
import Modal from "./Modal";
import PostBlog from "./PostBlog";
import Loading from './Loading';

export default function Services() {
  const [BlogData, setBlogData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
  const [count, setCount] = useState(0);

  const handleReadMoreClick = (blog) => {
    setSelectedBlog(blog);
    
    setIsModalOpen(true);
  };

  const HandlePostClick = () =>{
    setIsPostOpen(true);
    console.log(isPostOpen)
  }

  const url = "http://localhost:4000";

  useEffect(() => {
    fetch(url + "/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); 
      });
  }, [count]);

  return (
    <>
      <div className="pt-[72px] w-screen fixed pr-8 flex justify-end">
        <button onClick={HandlePostClick}
        
        className="inline-flex font-blod text-2xl items-center px-3 py-2  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>

      {isLoading ? ( 
        <Loading />
      ) : (
        <div className="m-10 pt-[72px] px-10 mt-2 mb-0 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 justify-between">
          {BlogData.map((blogs, index) => (
            <Card
              blogs={blogs}
              key={index}
              handleClick={() => {}}
              onReadMoreClick={() => handleReadMoreClick(blogs)}
            />
          ))}
        </div>
      )}

      <PostBlog 
        isOpen={isPostOpen}
        onClose ={()=>setIsPostOpen(false)}
        setCount={setCount}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blog={selectedBlog}
      />
    </>
  );
}
