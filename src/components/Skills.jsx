import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "VS Code", "Postman", "Figma"],
  },
];

export function Skills() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Skills</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {skillSet.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
