import OptimizedPlanCard from "./PlanCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Dirt from "@/assets/Dirt.webp";
import Stone from "@/assets/Stone.webp";
import IronBlock from "@/assets/IronBlock.webp";
import Oak from "@/assets/Oak.webp";
import Coal from "@/assets/Coal.webp";
import Gold from "@/assets/Gold.webp";
import Diamond from "@/assets/Diamond.webp";
import Obsidian from "@/assets/Obsidian.webp";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useMemo } from "react";
import { Autoplay } from "swiper/modules";

const PlanCardSwiper = () => {
  const { theme, color } = useContext(ThemeContext);

  const slidesData = useMemo(
    () => [
      {
        icon: Obsidian,
        planName: "Obsidian Plan",
        ram: "16GB",
        threads: 4,
        storage: "50GB NVME SSD",
        price: "720",
        isEnterprise: true,
        cpu: "Ryzen9 7950X",
        ramLabel: "DDR5 RAM",
        storageLabel: "STORAGE",
        threadsLabel: "THREADS",
        cpuLabel: "CPU",
      },
      {
        icon: Dirt,
        planName: "Dirt Plan",
        ram: "2GB",
        cpu: "Ryzen9 7950X",
        threads: 1,
        storage: "5GB NVME SSD",
        price: "160",
        isCheap: true,
        ramLabel: "DDR5 RAM",
        storageLabel: "STORAGE",
        threadsLabel: "THREADS",
        cpuLabel: "CPU",
      },
      {
        icon: Oak,
        planName: "Wood Plan",
        ram: "4GB",
        threads: 2,
        storage: "10GB NVME SSD",
        price: "240",
        cpu: "Ryzen9 7950X",
        ramLabel: "DDR5 RAM",
        storageLabel: "STORAGE",
        threadsLabel: "THREADS",
        cpuLabel: "CPU",
      },
      {
        icon: Stone,
        planName: "Stone Plan",
        ram: "5GB",
        threads: 2,
        storage: "15GB NVME SSD",
        price: "280",
        cpu: "Ryzen9 7950X",
        ramLabel: "DDR5 RAM",
        storageLabel: "STORAGE",
        threadsLabel: "THREADS",
        cpuLabel: "CPU",
      },
      {
        icon: Coal,
        planName: "Coal Plan",
        ram: "6GB",
        threads: 2,
        storage: "20GB NVME SSD",
        price: "360",
        cpu: "Ryzen9 7950X",
        ramLabel: "DDR5 RAM",
        storageLabel: "STORAGE",
        threadsLabel: "THREADS",
        cpuLabel: "CPU",
      },
      {
        icon: IronBlock,
        planName: "Iron Plan",
        ram: "8GB",
        threads: 3,
        storage: "25GB NVME SSD",
        price: "480",
        cpu: "Ryzen9 7950X",
        ramLabel: "DDR5 RAM",
        storageLabel: "STORAGE",
        threadsLabel: "THREADS",
        cpuLabel: "CPU",
      },
      {
        icon: Gold,
        planName: "Gold Plan",
        ram: "10GB",
        threads: 3,
        storage: "30GB NVME SSD",
        price: "560",
        isPopular: true,
        cpu: "Ryzen9 7950X",
        ramLabel: "DDR5 RAM",
        storageLabel: "STORAGE",
        threadsLabel: "THREADS",
        cpuLabel: "CPU",
      },
      {
        icon: Diamond,
        planName: "Diamond Plan",
        ram: "12GB",
        threads: 3,
        storage: "40GB NVME SSD",
        price: "640",
        cpu: "Ryzen9 7950X",
        ramLabel: "DDR5 RAM",
        storageLabel: "STORAGE",
        threadsLabel: "THREADS",
        cpuLabel: "CPU",
      },
    ],
    []
  );

  const slides = useMemo(
    () =>
      slidesData.map((slide, index) => (
        <SwiperSlide key={index} className="mt-10">
          <OptimizedPlanCard {...slide} />
        </SwiperSlide>
      )),
    [slidesData]
  );

  return (
    <div className="parent-custom-swiper relative w-full max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
        <p className={`text-lg font-mono sm:text-xl ${theme ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
          Select the perfect hosting plan for your Minecraft server
        </p>
      </div>
      <Swiper
        className="custom-swiper !w-full h-auto sm:h-[540px] lg:h-[580px] flex items-center justify-center relative px-4 sm:px-8"
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
            centeredSlides: false
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true
          },
        }}
        loop
        speed={600}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
      >
        <div className="slide-inner">{slides}</div>
      </Swiper>
      <div className="hidden lg:block">
        <button
          className={`next absolute top-[50%] -translate-y-1/2 -right-4 xl:-right-8 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bg-${
            theme ? "[#1c2738]" : "white"
          } border border-emerald-500/20 hover:border-emerald-500/40`}
        >
          <ArrowRight size={24} color={theme ? "#fff" : "#1c2738"} />
        </button>
        <button
          className={`prev absolute top-[50%] -translate-y-1/2 -left-4 xl:-left-8 z-10 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bg-${
            theme ? "[#1c2738]" : "white"
          } border border-emerald-500/20 hover:border-emerald-500/40`}
        >
          <ArrowLeft size={24} color={theme ? "#fff" : "#1c2738"} />
        </button>
      </div>
    </div>
  );
};

export default PlanCardSwiper;