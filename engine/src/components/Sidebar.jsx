import React from "react";
import { Home, Search, Library, BookOpen, Globe, Paperclip, ArrowRight, Settings, ChevronDown, HomeIcon, CompassIcon, LayersIcon, BookmarkIcon } from "lucide-react";

export const Sidebar = () => {
    return (
      <div className="hidden md:flex flex-col w-64 bg-black border-r border-white/10">
        <div className="p-4 space-y-4">
        <div className="p-4 space-y-4 flex justify-center">
  <span className="text-xl text-orange-500 font-semibold text-center w-full">
    Alchemy-Engine
  </span>
</div>
          <button className="w-full px-4 py-2 flex items-center justify-between rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white">
            <span className="text-orange-500" >New Thread</span>
            <span className="text-xs  text-orange-500 ">Ctrl I</span>
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {[
            { icon: Home, label: "Home" },
            { icon: Search, label: "Discover" },
            { icon: Library, label: "Spaces" },
            { icon: BookOpen, label: "Library" }
          ].map((item, index) => (
            <a key={index} href="#" className=" text-orange-500 flex items-center px-4 py-2 text-sm rounded-lg hover:bg-white/5 font-medium hover:text-white">
              <item.icon className="w-5 h-5 mr-3 text-orange-500 " />
              {item.label}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="p-4 rounded-lg bg-white/5">
            <h3 className="font-semibold mb-2 items-center text-orange-500">Alchemy Pro</h3>
            <p className="text-sm text-gray-400 mb-4"> Let you know more about Material Strength ! </p>
            <button className="w-full bg-orange-500 px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white">Learn More</button>
          </div>
        </div>
      </div>
    );
  };