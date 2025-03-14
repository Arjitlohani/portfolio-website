import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src="/arjit.jpg"
                alt="Arjit"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -inset-4 border-4 border-blue-500 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center md:text-left"
          >
            <h1 className="text-6xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-blue-400">Arjit</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A passionate developer working from home, creating innovative
              solutions
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                href="https://github.com/Arjitlohani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold"
              >
                View GitHub
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
