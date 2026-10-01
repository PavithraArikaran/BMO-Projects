import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

const APP_URL = "https://app.bmoprojects.in/";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500 text-white font-black flex items-center justify-center text-xs">
              B
            </div>
            <div className="flex items-center">
              <span className="font-extrabold text-orange-500 font-heading">BMO</span>
              <span className="font-extrabold text-slate-900 font-heading ml-1">PROJECTS</span>
            </div>
          </div>

          {/* Screenshot tagline */}
          <div className="flex items-center gap-1 font-medium text-slate-600">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by</span>
            <strong className="text-orange-600">BMO SOFTWARE</strong>
          </div>

          {/* Target App URL Link */}
          <div className="flex items-center space-x-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 font-bold hover:underline flex items-center gap-1"
            >
              <span>app.bmoprojects.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
