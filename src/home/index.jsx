import Header from '@/components/custom/Header';
import { UserButton } from '@clerk/clerk-react';
import { AtomIcon, Edit, Share2 } from 'lucide-react';
import React from 'react';

function Home() {
  return (
    <div>
      <Header/>
      <div>
        <section className="z-50">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
           
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Build Your Resume <span className="text-primary">With AI</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Effortlessly Craft a Standout Resume with Our AI-Powered Builder
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://youtu.be/Q5LM985yUmQ"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch Video
              </a>
            </div>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 mx-auto max-w-screen-lg">
            {/* Card 1 */}
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">
              <AtomIcon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-900">AI-Powered Suggestions</h3>
              <p className="text-gray-500 text-center">
                Get AI-based suggestions to enhance your resume sections, skills, and more.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">
              <Edit className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-900">Customizable Templates</h3>
              <p className="text-gray-500 text-center">
                Choose from a variety of templates that suit your professional needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">
              <Share2 className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-900">Easy Sharing</h3>
              <p className="text-gray-500 text-center">
                Download your resume or share it directly with recruiters and colleagues.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
