import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { fetchData } from "../Table/Faq/api";
import { RowData } from "../Table/Faq/types";
import "./style.css";
import { DotLoader } from "react-spinners";

const FAQSection: React.FC = () => {
  const [questions, setQuestions] = useState<RowData[]>([]);
  useEffect(() => {
    fetchData().then(data => setQuestions(data)); // Fetch initial data from server
  }, []);
  
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex: number | null) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="mt-10 border-solid rounded-[50px]">
      <div className="space-y-5">
        {questions.length == 0 && 
          <div className="flex flex-col justify-center items-center my-25 py-10">
            <DotLoader />
            <p className="text-2xl mt-20">Loading...</p>
          </div>
        }
        {questions.map((qa, index) => (
          <div
            key={index}
            className="bg-[#edeaea] px-5 py-3 rounded-xl shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="w-full text-left font-poppins font-bold text-[21px] items-center hover:text-[#000]">
              <div className="flex relative">
                <p className="long-word-break">{qa.title}</p>
                <div className="float-right r-0 px-2 pl-5 ml-auto">
                  <ChevronDownIcon
                    className={`text-right w-6 h-6 transform transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </div>
              </div>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600 text-[19px] text-left">
                {qa.body}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
