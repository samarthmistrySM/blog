import React from 'react'

export default function Footer() {
  return (
    <>
    
<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blogbites</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="http://localhost:3000/" className="hover:underline">blogbites</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/geekysamop" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Blogbites™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <ion-icon name="logo-twitter"></ion-icon>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <ion-icon name="logo-github"></ion-icon>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <ion-icon name="logo-discord"></ion-icon>
                  <span className="sr-only">Discord account</span>
              </a>
          </div>
      </div>
    </div>
</footer>


    </>
  )
}
