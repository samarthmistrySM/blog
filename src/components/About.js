import React,{useEffect} from "react";
import gsap from 'gsap';
export default function About() {

  useEffect(() => {
    gsap.from('.imgbook ', {
      opacity: 0,
      x:100,
      duration: 1,
      delay: 0.5,
    });
    gsap.to('.imgbook ', {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.from('.textz ', {
      opacity: 0,
      x:-100,
      duration: 1,
      delay: 0.5,
    });
    gsap.to('.textz ', {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
    });
  }, []);
  return (
    <>
      <div className="container mt-[30px] w-full flex justify-center rounded-3xl ">
        
          <div className="block rounded-lg dark:bg-gray-800 bg-gray-400">
            <div className="flex flex-wrap items-center">
              <div className="hidden lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Trendy Pants and Shoes"
                  className="imgbook w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12 textz">
                  <h2 className="mb-4 text-7xl font-bold dark:text-white text-gray-800">
                    About Us
                  </h2>
                  <p className="mb-6 flex items-center font-bold uppercase text-danger text-red-500 ">
                  <ion-icon className="font-bold" name="flame-outline"></ion-icon>
                    Hot news
                  </p>
                  <p className="mb-6 p text-gray-700 dark:text-gray-400">
                  A blog application developed with React and an Express API backend offers a powerful and dynamic platform for both bloggers and readers. React, with its component-based architecture and robust ecosystem, serves as an excellent choice for building the frontend of the application. It enables bloggers to create and manage their posts with ease, providing features such as rich text editing, image uploads, and user-friendly interfaces. React's reactivity ensures a seamless and responsive user experience, enhancing the readability and engagement of the blogs.
                  </p>
                  <p className="p text-gray-700 dark:text-gray-400">
                  On the other hand, Express, a minimal yet highly flexible Node.js framework, serves as the backend for the blog application. It manages user authentication, data storage, and serves as a bridge between the frontend and the database. With Express, bloggers can securely store their posts, manage user accounts, and retrieve content efficiently through API endpoints. The combination of React and Express fosters a dynamic and interactive blogging ecosystem, where users can comment on posts, search for topics of interest, and enjoy an engaging reading experience. This technology stack provides a solid foundation for building a feature-rich, scalable, and responsive blog application that caters to both bloggers and readers alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
