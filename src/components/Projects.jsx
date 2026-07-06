function Projects() {
  const projects = [
    {
      title: "Calculator App",
      desc: "Built using HTML, CSS and JavaScript.",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio using ReactJS and Tailwind CSS.",
    },
    {
      title: "Rock Paper Scissors Game",
      desc: "Interactive game developed using JavaScript.",
    },
  ];

  return (
    <section id="projects" className="p-10">
      <h2 className="text-4xl font-bold text-center mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="shadow-lg p-6 rounded-xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;