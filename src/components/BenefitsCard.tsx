import React from "react";

interface cardProps {
  title: string;
  img: string;
  desc: string;
}

const BenefitsCard: React.FC<cardProps> = ({ title, img, desc }) => {
  return (
    <div className="w-72 h-80 bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-400 rounded-xl p-5 flex flex-col shadow-xl hover:shadow-2xl hover:border-red-500 transition-all duration-300 hover:scale-105 group">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full mb-3">
        <div className="bg-white rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
          <img src={img} alt={title} className="w-16 h-16" />
        </div>
      </div>
      {/* Title */}
      <div className="text-red-700 text-center font-bold text-lg mb-3 group-hover:text-red-800 transition-colors duration-300">
        {title}
      </div>
      {/* Description */}
      <div className="text-black text-sm leading-relaxed text-center flex-grow overflow-hidden">
        <p className="line-clamp-5">{desc}</p>
      </div>
    </div>
  );
};

export default BenefitsCard;
