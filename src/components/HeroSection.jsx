/* eslint-disable */
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center text-center px-6">
      <div className="max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Discover the Joy of Cooking
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Explore curated recipes, learn from expert chefs, and share your own culinary creations.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#recipes"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Recipes
          </motion.a>
          <motion.a
            href="#videos"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Video
          </motion.a>
          <motion.a
            href="#submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Recipe
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;