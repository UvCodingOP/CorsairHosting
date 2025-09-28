import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Card = ({ icon, title, description }) => {
  const { theme, color } = useContext(ThemeContext);

  const item = {
    hidden: { y: 50 },
    show: { y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`
        relative h-64 sm:h-72 lg:h-80 w-full p-4 sm:p-6 rounded-xl border backdrop-blur-sm
        border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer overflow-hidden
        hover:transform hover:scale-105
      `}
      style={{
        background: theme
          ? "linear-gradient(135deg, #18212F 0%, #1e293b 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        color: color ? "white" : "#111827",
      }}
      variants={item}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none rounded-xl" />

      <div className="relative flex flex-col h-full justify-between">
        <div className="flex flex-col items-start space-y-2 sm:space-y-3">
          {icon && React.cloneElement(icon, { className: "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-emerald-400 mb-2" })}
          <p className={`text-lg sm:text-xl lg:text-2xl font-semibold ${theme ? "text-white" : "text-gray-900"}`}>{title}</p>
          <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${theme ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Card);