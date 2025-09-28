import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Star, Zap, HardDrive, Cpu, FileText } from "lucide-react";

const FeatureItem = ({ feature, theme }) => (
  <div
    className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg transition-colors duration-200 ${
      theme
        ? "bg-slate-800/50 hover:bg-slate-700/50"
        : "bg-gray-50 hover:bg-gray-100"
    }`}
  >
    <div className="text-emerald-500 flex-shrink-0">{feature.icon}</div>
    <span className={`text-xs sm:text-sm font-medium ${theme ? "text-gray-300" : "text-gray-600"} flex-shrink-0`}>
      {feature.label}:
    </span>
    <span className={`text-xs sm:text-sm font-semibold ${theme ? "text-white" : "text-gray-900"}`}>
      {feature.value}
    </span>
  </div>
);

const OptimizedPlanCard = ({
  icon,
  planName = "Dirt Plan",
  ram = "4GB",
  ramLabel,
  cpu = "200%",
  cpuLabel,
  threads,
  threadsLabel,
  storage,
  storageLabel,
  price = "₹350",
  isPopular = false,
  isEnterprise = false,
  isCheap = false,
}) => {
  const { theme } = useContext(ThemeContext);

  const features = useMemo(
    () => [
      { icon: <Cpu className="w-4 h-4" />, label: ramLabel, value: ram },
      { icon: <Zap className="w-4 h-4" />, label: cpuLabel, value: cpu },
      { icon: <HardDrive className="w-4 h-4" />, label: threadsLabel, value: threads },
      { icon: <Star className="w-4 h-4" />, label: storageLabel, value: storage },
    ],
    [ram, cpu, storage, threads, ramLabel, cpuLabel, threadsLabel, storageLabel]
  );

  return (
    <div
      className={`relative overflow-hidden w-full max-w-80 h-auto min-h-[390px] sm:h-[490px] lg:h-[500px] p-4 sm:p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg mx-auto
        ${theme ? "border-emerald-500/20 bg-slate-900/80" : "border-gray-200 bg-white/80"}`}
      style={{
        background: theme
          ? "linear-gradient(135deg, #18212F 0%, #1e293b 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      {(isPopular || isEnterprise || isCheap) && (
        <div className="absolute -top-1 -right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg z-10">
          {isPopular ? "Popular" : isEnterprise ? "Enterprise" : "Cheap"}
        </div>
      )}

      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            {icon ? (
              <img src={icon} alt={planName} className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain" />
            ) : (
              <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            )}
          </div>

          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${theme ? "text-white" : "text-gray-900"}`}>
            {planName}
          </h3>
        </div>

        {/* Features */}
        <div className="flex-1 space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {features.map((feature, index) => (
            <FeatureItem key={`${feature.label}-${index}`} feature={feature} theme={theme} />
          ))}
        </div>

        {/* Price + Button */}
        <div className="text-center mt-auto">
          <div className="relative p-2 sm:p-3 rounded-xl mb-3 sm:mb-4">
            <div className="relative">
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${theme ? "text-white" : "text-gray-900"} mb-1`}>
                <span className="text-emerald-500">₹</span>
                <span className="text-emerald-500">{price}</span>
              </div>
              <div className={`text-xs sm:text-sm font-medium ${theme ? "text-gray-300" : "text-gray-600"} uppercase tracking-wider`}>
                per month
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-sm sm:text-base">
            <span>Choose Plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OptimizedPlanCard);