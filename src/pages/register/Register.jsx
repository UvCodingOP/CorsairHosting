import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed, EyeOff, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const { theme } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);
  const MotionLink = motion(Link);

  const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

  return (
    <div
      className={`min-h-screen w-screen relative pt-20 pb-8 px-4 sm:px-6 lg:px-8 ${theme ? "dark" : "light"} ${
        theme ? "bg-[#111827]" : "bg-[#fff]"
      } ${
        theme ? "text-white" : "text-black"
      } flex justify-center items-center`}
    >
      <div className="w-full max-w-md mx-auto">
        <Card
          className={`w-full p-6 sm:p-8 ${
            theme ? "bg-[#19232e]" : "bg-white"
          } border-emerald-500/30 rounded-2xl shadow-xl`}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-emerald-400 font-semibold text-2xl sm:text-3xl lg:text-4xl mb-2">
              Create Account
            </h1>
            <p className="text-gray-400 font-mono text-sm sm:text-base">
              Join Corsair Hosting and start your server today
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 -mt-9">
            <div className={`relative`}>
              <input
                type="text"
                placeholder="Enter your username"
                className={`w-full py-3 pl-11 pr-4 rounded-lg outline-none border transition-colors duration-200 text-sm sm:text-base ${
                  theme
                    ? "bg-[#1d2935] border-gray-700 text-white placeholder-gray-400 focus:border-emerald-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500"
                }`}
              />
              <User
                className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500"
                size={18}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full py-3 pl-11 pr-4 rounded-lg outline-none border transition-colors duration-200 text-sm sm:text-base ${
                  theme
                    ? "bg-[#1d2935] border-gray-700 text-white placeholder-gray-400 focus:border-emerald-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500"
                }`}
              />
              <Mail
                className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500"
                size={18}
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full py-3 pl-11 pr-11 rounded-lg outline-none border transition-colors duration-200 text-sm sm:text-base ${
                  theme
                    ? "bg-[#1d2935] border-gray-700 text-white placeholder-gray-400 focus:border-emerald-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500"
                }`}
              />
              <Lock
                className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500"
                size={18}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 hover:text-emerald-500 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <Button className="w-full px-4 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-600/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              Create Account
            </Button>

             <motion.div variants={itemVariants} className="text-center">
                <p className="text-sm text-gray-400">
                  Already have an account?{' '}
                  <MotionLink
                    to="/login"
                    className="text-emerald-500 hover:text-emerald-500/80 font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign In
                  </MotionLink>
                </p>
              </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
