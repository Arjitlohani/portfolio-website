import { motion } from "framer-motion";

const projects = [
  {
    title: "FreshFind",
    description:
      "A modern web application for finding and managing fresh produce and groceries.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/Arjitlohani/freshfind",
  },
  {
    title: "Movie App React",
    description:
      "A comprehensive movie browsing application built with React, featuring movie details, ratings, and search functionality.",
    tech: ["React", "TMDB API", "Tailwind CSS"],
    link: "https://github.com/Arjitlohani/Movie-App-React",
  },
  {
    title: "Next.js First Project",
    description:
      "A simple CRUD operations application built with Next.js, demonstrating basic web development concepts.",
    tech: ["Next.js", "JavaScript", "CSS"],
    link: "https://github.com/Arjitlohani/Nextjs_FirstProject",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
