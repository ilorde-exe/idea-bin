import React from "react";

const page = () => {
  return (
    <div className="py-10 lg:px-56 sm:px-4 pb-6">
      <section className="lg:px-24 lg:py-10 px-4 px-4 w-full flex-center flex-col ">
        <div className="py-10 px-12 rounded-2xl shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-none lg:backdrop-blur-sm  bg-opacity-20 ">
          <div className="flex items-center justify-center ">
            <div className="flex flex-col gap-10">
              <button className="w-56 bg-red-500 text-white font-bold py-6 px-4 border-b-4 border-red-900 hover:border-gray-950 hover:bg-gray-500 hover:text-white rounded transition duration-500 ease-in-out ">
                Sign-in with Google
              </button>
              <button className="w-56 bg-gray-800 text-white font-bold py-6 px-4 border-b-4 border-gray-950 hover:border-gray-700 hover:bg-gray-950 hover:text-white rounded transition duration-500 ease-in-out ">
                Sign-in with Github
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
