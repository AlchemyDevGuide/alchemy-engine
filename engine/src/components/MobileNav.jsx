import React from "react";
import { Home, Search, Library, BookOpen, Globe, Paperclip, ArrowRight, Settings, ChevronDown, HomeIcon, CompassIcon, LayersIcon, BookmarkIcon } from "lucide-react";

export const MobileNav = () => {
    return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t  border-white/10">
        <nav className="flex justify-around items-center h-16">
          {[HomeIcon, CompassIcon, LayersIcon, BookmarkIcon].map((Icon, index) => (
            <a key={index} href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
              <Icon size={24} />
              <span className="text-xs text-orange-500 mt-1">{["Home", "Discover", "Spaces", "Library"][index]}</span>
            </a>
          ))}
        </nav>
      </div>
    );
  };

