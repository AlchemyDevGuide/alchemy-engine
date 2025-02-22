import React from "react";
import { Home, Search, Library, BookOpen, Globe, Paperclip, ArrowRight, Settings, ChevronDown, HomeIcon, CompassIcon, LayersIcon, BookmarkIcon } from "lucide-react";

export const SearchBar = ({ searchText, setSearchText }) => {
    return (
        <div className="relative glass-effect rounded-lg p-2 animate-fadeIn">
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Ask anything..."
                className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
            />
            <div className="absolute right-2 top-2 flex items-center space-x-2">
                <button className="p-2 rounded-lg button-hover flex items-center space-x-2">
                    <span>Auto</span>
                    <ChevronDown className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg text-black bg-orange-500 transition-colors duration-200 hover:bg-orange-600 hover:text-white">
                    <Globe className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg text-black bg-orange-500 transition-colors duration-200 hover:bg-orange-600 hover:text-white">
                    <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg text-black bg-orange-500 transition-colors duration-200 hover:bg-orange-600 hover:text-white">
                    <ArrowRight className="w-5 h-5" />
                </button>

            </div>
        </div>
    );
};
