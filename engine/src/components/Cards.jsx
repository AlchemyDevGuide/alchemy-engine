import React from "react";

const data = [
  {
    title: "Material KnowledgeBase",
    description:
      "Stay updated with the latest trends, research, and innovations in Material Science.",
  },
  {
    title: "Chat With your PDF",
    description:
      "Explore frameworks and tools to interact with PDFs efficiently using AI-powered solutions.",
  },
  {
    title: "Know your Material Strength",
    description:
      "Discover insights into material properties, testing methods, and advancements in decentralized technologies.",
  },
];

export const Card = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-3 mt-6 w-full md:w-3/4">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-transparent shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-all cursor-pointer w-full max-w-xs mx-auto"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
