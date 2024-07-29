import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { fetchData } from "../Table/Faq/api";
import { RowData } from "../Table/Faq/types";

const FAQSection: React.FC = () => {
  const [questions, setQuestions] = useState<RowData[]>([]);
  useEffect(() => {
    fetchData().then(data => setQuestions(data)); // Fetch initial data from server
  }, []);
  // const questions = [
  //   {
  //     title: "What is Nfthub's NFT Collection?",
  //     content:
  //       "By simplifying green purchases with state-of-the-art assets tokenization, Africoin is set to stand as the definitive eco-conscious choice in the market, aiming to be the gold standard for sustainable transactions globally. By simplifying green purchases with state-of-the-art assets tokenization, Africoin is set to stand as the definitive eco-conscious ",
  //   },
  //   {
  //     title: "How do carbon credits help the environment?",
  //     content:
  //       "They incentivize companies to reduce their carbon emissions by allowing them to trade credits earned from reducing emissions with other companies.",
  //   },
  //   {
  //     title: "Who can generate carbon credits?",
  //     content:
  //       "Entities that engage in activities that reduce carbon emissions, such as renewable energy projects, reforestation, and energy efficiency improvements, can generate carbon credits.",
  //   },
  //   {
  //     title:
  //       "What is the difference between compliance and voluntary carbon markets?",
  //     content:
  //       "Compliance markets are regulated and require companies to adhere to legal carbon emission limits, while voluntary markets are not legally mandated and allow companies to purchase carbon credits to offset their emissions voluntarily.",
  //   },
  //   {
  //     title: "How can businesses use carbon credits?",
  //     content:
  //       "Businesses can buy carbon credits to offset their own emissions, helping them meet regulatory requirements or achieve corporate sustainability goals.",
  //   },
  //   {
  //     title: "What is a carbon offset?",
  //     content:
  //       "A carbon offset is a reduction in emissions of carbon dioxide or other greenhouse gases made in order to compensate for emissions produced elsewhere.",
  //   },
  //   {
  //     title: "Why are carbon credits important for combating climate change?",
  //     content:
  //       "They provide a financial incentive for reducing greenhouse gas emissions and can help drive investment in sustainable projects and technologies, contributing to global efforts to mitigate climate change.",
  //   },
  //   {
  //     title: "How do carbon credits help the environment?",
  //     content:
  //       "They incentivize companies to reduce their carbon emissions by allowing them to trade credits earned from reducing emissions with other companies.",
  //   },
  //   {
  //     title: "Who can generate carbon credits?",
  //     content:
  //       "Entities that engage in activities that reduce carbon emissions, such as renewable energy projects, reforestation, and energy efficiency improvements, can generate carbon credits.",
  //   },
    // {
    //   title:
    //     "What is the difference between compliance and voluntary carbon markets?",
    //   content:
    //     "Compliance markets are regulated and require companies to adhere to legal carbon emission limits, while voluntary markets are not legally mandated and allow companies to purchase carbon credits to offset their emissions voluntarily.",
    // },
    // {
    //   title: "How can businesses use carbon credits?",
    //   content:
    //     "Businesses can buy carbon credits to offset their own emissions, helping them meet regulatory requirements or achieve corporate sustainability goals.",
    // },
    // {
    //   title: "What is a carbon offset?",
    //   content:
    //     "A carbon offset is a reduction in emissions of carbon dioxide or other greenhouse gases made in order to compensate for emissions produced elsewhere.",
    // },
    // {
    //   title: "Why are carbon credits important for combating climate change?",
    //   content:
    //     "They provide a financial incentive for reducing greenhouse gas emissions and can help drive investment in sustainable projects and technologies, contributing to global efforts to mitigate climate change.",
    // },
  // ];
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex: number | null) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="mt-10 border-solid rounded-[50px] ">
      <div className="space-y-5">
        {questions.map((qa, index) => (
          <div
            key={index}
            className="bg-[#edeaea] px-5 py-3 rounded-xl shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="w-full text-left font-poppins font-bold text-[21px] items-center hover:text-[#000]">
              <div className="flex justify-between">
                <p>{qa.title}</p>
                <ChevronDownIcon
                  className={`text-right w-6 h-6 ml-auto ${activeIndex === index ? "rotate-180" : ""
                    }`}
                />
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
