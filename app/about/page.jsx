import React from "react";

const About = () => {
  return (
    <div>
      <section className="lg:px-24 lg:py-10 px-4 px-4 w-full flex-center flex-col ">
        <div className="py-10 px-12 rounded-2xl shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-none lg:backdrop-blur-sm  bg-opacity-20 ">
          <div className="flex flex-col mb-8">
            <div className="mb-6 flex flex-col md:flex-row flex-1">
              <div className="flex-1 ">
                <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                  Welcome to IdeaBin,
                </h1>
              </div>
            </div>

            <p className="py-4 font-inter text-l lg:text-xl text-black lg:font-normal font-medium">
              At IdeaBin, we believe that every idea, no matter how big or
              small, has the potential to make a difference. Whether you're an
              aspiring writer, a seasoned entrepreneur, or simply someone with a
              passion for innovation, this platform is your canvas to express,
              explore, and share your ideas with the world.
              <br />
              <br />
              Our mission is simple: to cultivate a community of thinkers,
              dreamers, and doers who are committed to turning their ideas into
              reality. With a user-friendly interface and a supportive
              environment, IdeaBin is designed to inspire collaboration, spark
              creativity, and fuel meaningful conversations.
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
