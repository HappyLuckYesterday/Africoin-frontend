import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import IconETH from "../assests/IconETH.png";
import Arrow2 from "../assests/arrow2.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const { useEffect } = require("react");

interface SectionProps {
  tokenType: String;
  setTokenType: (value: string) => void;
}

const Section = (props: SectionProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  const HandleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      HideDropdown();
    }
  };

  const [dropdownShow, setDropdownShow] = useState(false);

  const tokenTypes = [
    { type: "Ethereum", short: "ETH" },
    { type: "Boost Trump Campaign", short: "BTC" },
    { type: "Baer Chain", short: "BRC" },
  ];

  const HideDropdown = () => {
    setDropdownShow(false);
  };

  const onDropdownClick = () => {
    if (dropdownShow === false) {
      document.addEventListener("mousedown", HandleClickOutside);
    } else {
      document.removeEventListener("mousedown", HandleClickOutside);
    }
    setDropdownShow(!dropdownShow);
  };

  const onTypeClick = (type: string) => {
    props.setTokenType(type);
    setDropdownShow(false);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-[20px] mb-1 relative">
      <div className="flex justify-between" ref={dropdownRef}>
        <div
          onClick={onDropdownClick}
          className=" flex bg-[#CFF2DB] rounded-xl items-center p-1 cursor-pointer hover:bg-[#b7f3cc]"
        >
          <img src={IconETH} alt="ICON" className="inline pr-2 w-[40px]" />
          <p className="text-[20px] font-bold font-montserrat">
            {props.tokenType}
          </p>
          <ChevronDownIcon className="mx-2 w-[20px]" />
        </div>
        {dropdownShow && (
          <div className="absolute left-4 top-[60px] shadow-2xl cursor-pointer z-20 bg-[#CFF2DB] p-2 rounded-xl">
            {tokenTypes.map((type, index) => (
              <div
                onClick={() => onTypeClick(type.short)}
                key={index}
                className={`flex items-center p-2  border-b border-gray-400 rounded-md hover:bg-[#bddfc9] ${
                  index === tokenTypes.length - 1 && "border-none"
                }`}
              >
                <img
                  src={IconETH}
                  alt="ICON"
                  className="pr-2 w-[45px] h-[37px]"
                />
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-[18px]">{type.type}</span>
                  <span className="font-semibold text-[13px]">
                    {type.short}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        <input
          className="text-[27px] text-[#717A8C] bg-gray-100 font-bold font-montserrat outline-none text-right w-[50%]"
          placeholder="0.00"
        />
      </div>

      <div className="flex flex-row justify-between mt-5 pb-3">
        <p className="text-[15px] text-[#717A8C] font-bold font-montserrat tracking-wide">
          Balance: 2.8989 ETH(Max)
        </p>
        <p className="text-[15px] text-[#717A8C] font-bold font-montserrat">
          ~$6726.2307
        </p>
      </div>
    </div>
  );
};
const SwapPage: React.FC = () => {
  const [token1, setToken1] = useState("ETH");
  const [token2, setToken2] = useState("BRC");

  const onArrowButtonClick = () => {
    const token = token1;
    setToken1(token2);
    setToken2(token);
  };

  return (
    <div className="flex justify-center mb-20">
      <div className="w-[470px]">
        <h1 className="text-[65px] font-bold mb-8">Swap</h1>
        <div className="rounded-[20px] p-1 bg-white shadow-lg relative">
          <div
            onClick={onArrowButtonClick}
            className="absolute z-10 left-[45%] cursor-pointer hover:bg-gray-200 top-[29%] p-3 border-[6px] bg-gray-100 border-white rounded-full"
          >
            <img src={Arrow2} alt="arrow2" className="w-[20px]" />
          </div>
          <Section
            tokenType={token1}
            setTokenType={(value) => setToken1(value)}
          />
          <Section
            tokenType={token2}
            setTokenType={(value) => setToken2(value)}
          />
          <p className="text-right font-thin text-[17px] text-[#959dac] font-montserrat px-1">
            1EOS=0.0003064ETH
          </p>
          <Link
            to=""
            className="bg-gradient-to-tr from-[#2600FC] to-[#048343] hover:bg-gradient-to-bl hover:shadow-[1px_1px_1px_gray] text-white block mt-2 py-3 rounded-3xl text-[17px] tracking-wider font-semibold font-inter"
          >
            SWAP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
