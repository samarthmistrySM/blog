import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Card from "./Card";
import Modal from './Modal';

export default function Services() {
    const [BlogData, setBlogData] = useState([]);
    const [readMode, setReadMode] = useState(false);
    const [readData, setReadData] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false); // Add modal state
  const [selectedBlog, setSelectedBlog] = useState({});


  const handleReadMoreClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };


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

  useEffect(() => {
    gsap.from(".blog-card", {
      opacity: 0,
      y: -20,
      stagger: 0.2, 
      duration: 1,
      ease: "power3.inOut", 
    });
    gsap.to(".blog-card", {
      opacity: 1,
      y: 0,
      stagger: 0.2, 
      duration: 1,
      ease: "power3.inOut",
    });
  }, [BlogData]);

  return (
    <>
    <div className="m-10 mt-[69px] mb-0 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 justify-between">
      {BlogData.map((blogs, index) => (
        <Card
          blogs={blogs}
          setReadData={setReadData}
          setReadMode={setReadMode}
          key={index}
          onReadMoreClick={() => handleReadMoreClick(blogs)}
        />
      ))}
</div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blog={selectedBlog}
      />
    </>
  );
}
