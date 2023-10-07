import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Home() {
  useEffect(() => {
    gsap.from('.page1 ', {
      opacity: 0,
      y:-100,
      duration: 1,
      delay: 0.5,
    });
    gsap.to('.page1 ', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <div className="h-screen page1 w-full flex flex-col justify-center items-center text-center bg-indigo-400">
        <h1 className="text-5xl font-light ">Publish your passions, your way</h1>
        <h3 className="m-4 text-xl">Create a unique and beautiful blog easily.</h3>
      </div>
      <div className="px-9 h-screen page2 w-full flex justify-center items-center text-center bg-lime-500">
        <div className="textz">
          <h1 className="text-5xl font-light text-start mb-6">Know your audience</h1>
          <h3 className="w-3/4 text-xl text-start">
            Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your
            audience is coming from and what they’re interested in. You can even connect your blog
            directly to Google Analytics for a more detailed look.
          </h3>
        </div>
        <img
          className="rounded-2xl"
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt="images"
        />
      </div>
      <div className="h-screen page3 w-full flex flex-col justify-center items-center text-center bg-red-500">
        <h1 className="text-5xl font-light ">Hang onto your memories</h1>
        <h3 className="m-4 text-xl">Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google.</h3>
      </div>
    </>
  );
}
