import React from 'react';
import { motion } from 'framer-motion';

interface DeviceMockupProps {
  imageSrc: string;
  altText: string;
  urlPath?: string;
  badgeTitle?: string;
  floatingBadges?: React.ReactNode;
  maxHeight?: string;
  maxWidth?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  imageSrc,
  altText,
  floatingBadges,
  maxHeight = "max-h-[980px]",
  maxWidth = "max-w-9xl"
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full ${maxWidth} mx-auto relative group rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/10 hover:border-orange-300/60 transition-all duration-300`}
      >
        <div className="relative w-full overflow-hidden rounded-2xl">
          <img
            src={imageSrc}
            alt={altText}
            className={`w-full h-auto object-cover ${maxHeight} rounded-2xl transition-transform duration-500 group-hover:scale-[1.005]`}
          />

          {/* Optional Floating Badges */}
          {floatingBadges}
        </div>
      </motion.div>
    </div>
  );
};

