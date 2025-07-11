/* eslint-disable */
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-red-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-800"
        >
          Welcome to CookMaster
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Discover delicious recipes, expert tips, and submit your own creations.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md">
            Explore Recipes
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md">
            Watch Video
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md">
            Submit Your Recipe
          </button>
        </div>
        <div>
          <p>Intentional build error below (unclosed tag):</p>
          <div className="error-div">
            <p>This will break the build
        </div>
      </div>
    </section>
  );
}