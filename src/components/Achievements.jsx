import { motion } from "framer-motion";

const achievements = [
  {
    title: "Vertex Hackathon 2022",
    description: "Winner in the Islington College category for Milk",
    date: "2022",
  },
  {
    title: "NSU Hackathon",
    description: "Winner at Pulchock Engineering College",
    date: "2023",
  },
];

export function Achievements() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Achievements</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-blue-400">
                  {achievement.title}
                </h3>
                <span className="text-gray-400">{achievement.date}</span>
              </div>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
