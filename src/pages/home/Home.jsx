import React, { Suspense, useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/Home/Card";
import { Server, ShieldCheck, Timer, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Loader from "../../components/Loader";
import CountUp from "../../components/Home/CountUp";
import { ReactLenis, useLenis } from "lenis/react";

const PlanCardSwiper = React.lazy(() =>
  import("../../components/Home/PlanCardSwiper")
);

const Home = () => {
  const { theme, color } = useContext(ThemeContext);
  const [Number, setNumber] = useState(0);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <ReactLenis root>
      <div
        className={`home overflow-x-hidden bg-${
          theme ? "#111827" : "#fff"
        } text-${theme ? "#fff" : "#111827"}`}
        style={{
          background: theme ? "#111827" : "#fff",
          color: color ? "#fff" : "#111827",
        }}
      >
        <div className="relative top-22">
          <div className="buttons-div hero-text text-center mt-20">
            <motion.h1
              className="text-animation text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              Corsair Hosting
            </motion.h1>
            <motion.p
              className={`hero-subtitle text-xl sm:pl-4 sm:pr-4 md:text-2xl mb-8 max-w-3xl mx-auto text-${
                theme ? "gray-300" : "gray-600"
              }`}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
            >
              Premium Minecraft server hosting with unparalleled performance,
              instant setup, and 24/7 support.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center">
            <motion.button
              className="start-server-button w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 text-sm sm:text-base"
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.4,
            }}
          >
              Start Your Server
            </motion.button>
            <motion.button
              className="login-to-panel-button w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.4,
            }}
          >
              Login to panel
            </motion.button>
          </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mt-78 mb-16 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          Why Choose Corsair?
        </h2>
        <motion.div
          className="part2 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={container}
          whileInView={"show"}
          initial={"hidden"}
          viewport={{ amount: 0.2, once: true }}
        >
          <Card
            icon={<Server className="text-emerald-400 mb-4" size={48} />}
            title={"High Performance"}
            description={
              "Powerful servers optimized for Minecraft hosting with SSD storage and unlimited bandwidth."
            }
          />
          <Card
            icon={<Zap className="text-emerald-400 mb-4" size={48} />}
            title={"Instant Setup"}
            description={
              "Your server is ready in seconds. No waiting, no complex configurations."
            }
          />
          <Card
            icon={<ShieldCheck className="text-emerald-400 mb-4" size={48} />}
            title={"DDoS Protection"}
            description={
              "Advanced protection keeps your server online 24/7 against any attacks."
            }
          />
          <Card
            icon={<Timer className="text-emerald-400 mb-4" size={48} />}
            title={"24/7 Support"}
            description={
              "Expert support team available round the clock to help with any issues."
            }
          />
        </motion.div>

        <motion.div
          className={`show-offs py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[${
          theme ? "#131B29" : "#fff"
        }] grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto z-0 ${theme ? "text-white" : "text-black"}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="show-off-1 flex flex-col items-center"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              <CountUp target={100} duration={1} />
            </h2>
            <p>Servers Hosted</p>
          </motion.div>

          <motion.div
            className="show-off-2 flex flex-col items-center"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              <CountUp target={99} type={"percentage"} duration={1} />
            </h2>
            <p>Uptime Gurantee</p>
          </motion.div>

          <motion.div
            className="show-off-2 flex flex-col items-center"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              <CountUp target={24} duration={1} />/
              <CountUp target={7} duration={1} />
            </h2>
            <p>Expert Support</p>
          </motion.div>
        </motion.div>

        <div className="flex justify-center gap-20 m-10">
          <Suspense fallback={<Loader />}>
            <PlanCardSwiper />
          </Suspense>
        </div>
      </div>
    </ReactLenis>
  );
};

export default React.memo(Home);
