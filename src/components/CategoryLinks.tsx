import React from "react";
import {
  IconBriefcase,
  IconBulb,
  IconSchool,
  IconWriting,
  IconMoodSmile,
  IconHeart,
} from "@tabler/icons-react";

const categories = [
  { icon: IconBriefcase, label: "Business" },
  { icon: IconBulb, label: "Creative" },
  { icon: IconSchool, label: "Education" },
  { icon: IconWriting, label: "Journaling" },
  { icon: IconMoodSmile, label: "Communication" },
  { icon: IconHeart, label: "Health" },
];

const CategoryLinks: React.FC = () => {
  return (
    <div className="mt-10 sm:mt-20 flex flex-wrap justify-center items-center max-w-4xl mx-auto">
      {categories.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="m-1 inline-flex items-center space-x-2 text-sm font-medium rounded-lg border-gray bg-gray-200 text-gray-800 shadow-sm hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-blue-600 transition-all duration-200 p-3 cursor-pointer"
        >
          <Icon size={22} />
          <span className="">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryLinks;
