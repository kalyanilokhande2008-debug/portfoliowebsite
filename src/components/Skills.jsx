function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Tailwind CSS",
    "GitHub",
  ];

  return (
    <section id="skills" className="bg-gray-100 p-10">
      <h2 className="text-4xl font-bold text-center mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;