import React, { useState, useEffect } from 'react';

export default function Home() {
  const [postData, setPostData] = useState([]);
  const apikey = "AIzaSyBlDkNTgDiEeK-ah-TC9k2TaS6VGQL396g";
  const API_URL = `https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=${apikey}`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const posts = data.items;
        if (posts.length !== 0) {
          setPostData(posts);
        } else {
          console.log("No blogs found.");
        }
      })
      .catch(error => console.log(error));
  }, []);

  if (postData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      {postData.map(post => (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4" key={post.id}>
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}
