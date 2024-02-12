import Feed from "@components/Feed";
export default function Home() {
  return (
    <div>
      <section className="py-10 px-20 w-full flex-center flex-col ">
        <div className="py-10 px-12  rounded-2xl shadow-inner shadow-xl bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-none sm:backdrop-blur-sm bg-opacity-20 ">
          <h1 class="mb-4 text-5xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
              Discover <span className="text-black">and</span> Share
            </span>
            <span> </span>
            your Ideas.
          </h1>
          <p class="py-4 font-inter text-l lg:text-xl text-black font-semibold">
            Your Gateway to Creativity Unleashed! Explore a boundless collection
            of ingenious concepts and inventions, or ignite the spark of
            inspiration by contributing your own groundbreaking ideas. Whether
            you're seeking innovative solutions or eager to share your creative
            genius, Idea-bin is the vibrant online community where imagination
            flourishes. Join us in shaping the future, one idea at a time!
          </p>
        </div>
        <Feed />
      </section>
    </div>
  );
}
