function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/18353/18353993.png"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-lg"
      />

      <h1 className="text-5xl font-bold mt-6">
        Hi, I'm Kalyani
      </h1>

      <p className="text-xl mt-4">
        Frontend Developer | ReactJS Developer
      </p>

      <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
        Hire Me
      </button>
    </section>
  );
}

export default Hero;