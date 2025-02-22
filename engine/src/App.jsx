import { useState } from "react";
import { Home, Search, Library, BookOpen, Globe, Paperclip, ArrowRight, Settings, ChevronDown, HomeIcon, CompassIcon, LayersIcon, BookmarkIcon } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { SearchBar } from "./components/SearchBar";
import { MobileNav } from "./components/MobileNav";
import { Card } from "./components/Cards";



 
 

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fadeIn text-orange-500 ">Test out Alchemy !</h1>
        <div className="max-w-3xl mx-auto mb-8">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <Card/>
        </div>
      </main>
      <MobileNav/>
    </div>
  );
};

export default App;
