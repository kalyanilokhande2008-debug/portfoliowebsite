import { useState } from "react"
function App() {
   const [theme, setTheme] = useState("light")
  return (
    <div className={theme === "dark" ? "bg-black text-white min-h-screen" : "bg-gray-50 text-black min-h-screen"}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full top-0">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <div className="space-x-3">
  <button onClick={() => setTheme("light")}>Light</button>
  <button onClick={() => setTheme("dark")}>Dark</button>
</div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8 pt-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        
        <div>
          <h3 className="text-xl">Hello, I'm</h3>
          <h1 className="text-5xl font-bold mt-2">Kalyani Lokhande</h1>
          <h2 className="text-2xl mt-2">MERN Stack Developer</h2>

          <p className="mt-4 max-w-md">
            Passionate Web Developer who loves building responsive and modern websites using React and Tailwind CSS.
          </p>

          <div className="mt-6 space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
              About Me
            </button>
            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">
              Contact Me
            </button>
          </div>
        </div>

        <img
          className="w-60 rounded-full border-4 border-white"
          src="https://cdn-icons-png.flaticon.com/128/3135/3135789.png"
          alt="profile"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Hello! I'm Kalyani Lokhande, a passionate MERN Stack Developer.
          I enjoy creating modern, responsive, and user-friendly web applications using React, Node.js, Express, and MongoDB.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-white p-10">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>

        <div className="max-w-2xl mx-auto space-y-6">

          <Skill name="HTML" value="95%" color="bg-orange-500" />
          <Skill name="CSS" value="90%" color="bg-blue-500" />
          <Skill name="JavaScript" value="85%" color="bg-yellow-500" />
          <Skill name="React" value="80%" color="bg-cyan-500" />

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Project title="Portfolio Website" />
          <Project title="Rock Paper Scissors Game" />
          <Project title="Student Result Calculator" />

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

        <form className="max-w-md mx-auto space-y-4">
          <input className="w-full p-2 border rounded" placeholder="Your Name" />
          <input className="w-full p-2 border rounded" placeholder="Your Email" />
          <textarea className="w-full p-2 border rounded" placeholder="Message"></textarea>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-4">
        © 2026 Kalyani Lokhande. All rights reserved.
      </footer>

    </div>
  )
}

/* Components */
function Skill({ name, value, color }) {
  return (
    <div>
      <p className="mb-1">{name} - {value}</p>
      <div className="w-full bg-gray-200 h-3 rounded">
        <div className={`${color} h-3 rounded`} style={{ width: value }}></div>
      </div>
    </div>
  )
}

function Project({ title }) {
  return (
    <div className="bg-white p-5 shadow rounded hover:shadow-xl transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 mt-2">Responsive project built using React & Tailwind</p>
    </div>
  )
}

export default App;