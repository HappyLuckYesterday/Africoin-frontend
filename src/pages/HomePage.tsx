import React, { useEffect } from "react";
import WithAfricoin from "../assests/with Africoin.png";
import BlueLinkButton from "../components/Buttons/BlueLinkButton";
import GreenWorld from "../assests/GreenWorld.png";
import Pic1 from "../assests/pic1.png";
import Pic2 from "../assests/pic2.png";
import Pic3 from "../assests/pic3.png";
import Background1 from "../assests/background1.png";
import Govern from "../assests/government.png";
import House from "../assests/house.png";
import House2 from "../assests/house2.png";
import Circle from "../assests/Circle.png";
import tower from "../assests/tower.png";
import Coin4 from "../assests/Coin4.png";
import Coin5 from "../assests/Coin5.png";
import Coin6 from "../assests/Coin6.png";
import Coin7 from "../assests/Coin7.png";
import Man1 from "../assests/Man1.jpg";
import Man2 from "../assests/Man2.jpg";
import Man3 from "../assests/Man3.jpg";
import Road from "../assests/Road.png";
import ContactForm from "../components/ContactForm/ContactForm";
import FAQSection from "../components/FAQ/FAQSection";
import BlueLinkButton2 from "../components/Buttons/BlueLinkButton2";
import BlogCard from "../components/Cards/BlogCard";

const HomePage: React.FC = () => {
  return (
    <div className="relative px-5">
      <div className="">
        <div className="mt-8 sm:mt-16 md:mt-24 lg:mt-28 xl:mt-32">
          <p className="text-[24px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-poppins">
            Transforming Carbon Credits in Africa
          </p>
          <img
            src={WithAfricoin}
            alt="With Africoin"
            className="mx-auto my-5"
          />
          <p className="text-[16px] sm:text-[18px] md:text-[22px] mb-10 font-poppins">
            Join Africoin in Mitigating Climate Change with Blockchain
            Technology
          </p>
          <div className="my-8 xl:my-20">
            <BlueLinkButton2 text="EXPLORE WALLET" link="/" />
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <img src={GreenWorld} alt="Green World" className=" top-0 mx-auto" />
        <p className=" bottom-0 text-[16px] sm:text-[28px] md:text-[32px] font-poppins text-center px-[10%]">
          By simplifying green purchases with state-of-the-art assets
          tokenization, Africoin is set to stand as the definitive eco-conscious
          choice in the market, aiming to be the gold standard for sustainable
          transactions globally.
        </p>
      </div>
      <div className=" h-full mt-16 xl:mt-20">
        <p className="text-center text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-poppins leading-none">
          Unlocking freedom with
        </p>
        <p className="text-center text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-poppins leading-none text-[#2A9646]">
          Decentralized Africoin
        </p>
        <div className="flex justify-around flex-wrap mt-10">
          <div className="h-[550px] lg:h-[600px] min-w-[300px] max-w-[400px] bg-white rounded-[50px] p-10 mb-5 sm:mx-1 flex flex-col justify-between sm:justify-start items-center">
            <img src={Pic1} alt="pic 1" className="mx-auto my-5" />
            <p className="text-[36px] lg:text-[45px] font-poppins mt-10">
              0 gas emission
            </p>
            <p className="text-[20px] lg:text-[25px] font-poppins mt-10">
              We propose a low energy consuming Blockchain fully supported
              by zero carbon miners
            </p>
          </div>
          <div className="h-[550px] lg:h-[600px] min-w-[300px] max-w-[400px] bg-white rounded-[50px] p-10 mb-5 mx-1 flex flex-col justify-between sm:justify-start items-center">
            <img src={Pic2} alt="pic 1" className="mx-auto my-5" />
            <p className="text-[36px] lg:text-[45px] font-poppins mt-10">
              Sustainability
            </p>
            <p className="text-[20px] lg:text-[25px] font-poppins mt-10">
              The main purpose for Greenercoin is to become the currency that is
              usable for the sustainable market
            </p>
          </div>
          <div className="h-[550px] lg:h-[600px] min-w-[300px] max-w-[400px] bg-white rounded-[50px] p-10 mb-5 sm:mx-1 flex flex-col justify-between sm:justify-start items-center">
            <img src={Pic3} alt="pic 1" className="mx-auto my-5" />
            <p className="text-[36px] lg:text-[45px] font-poppins mt-10">
              Decentralized Application
            </p>
            <p className="text-[20px] lg:text-[25px] font-poppins mt-10">
              These Dapps with an NFT Marketplace and a DEX will be used to
              empowers the Blockchain ecosystem.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="relative mt-20">
        <img src={Background1} alt="Background 1" className="min-h-[160px] w-full absolute" />
        <div className="flex flex-col py-[12%] items-center h-full relative">
          <p className="text-[20px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-poppins text-white sm:mb-10 mb-5 leading-none">
            The first certified Africoin Blockchain
          </p>
          <BlueLinkButton2 text="EXPLORE WALLET" link="/" />
        </div>
      </div> */}
      <div className=" mt-20">
        <p className="text-left text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-poppins">
          Who benifits from <b className="text-green-500">Africoin</b>
        </p>
        <div className="flex justify-around flex-wrap mt-[120px]">
          <div className="relative h-[600px] min-w-[300px] max-w-[400px] lg:w-[400px] bg-[#13172B] roundec-[30px] p-10 rounded-[50px] mb-20 mx-1">
            <img src={Govern} alt="111" className="translate-y-[-60%]" />
            <div className="absolute min-w-[300px] top-[30%] left-0 p-5 lg:p-10">
              <p className="text-[35px] font-poppins text-white leading-none mb-5 mx-1">
                Governments
              </p>
              <p className="text-[20px] font-poppins text-white">
                Africoin empowers governments to achieve ambitious environmental
                goals through a secure, transparent, and efficient blockchain
                platform for carbon credit management.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] w-[400px] bg-[#2A9646] roundec-[30px] p-10 rounded-[50px] mb-20 mx-1">
            <img src={House} alt="111" className="translate-y-[-60%]" />
            <div className="absolute top-[30%] left-0 p-10">
              <p className="text-[35px] font-poppins text-white leading-none mb-5 mx-1">
                Early Investors
              </p>
              <p className="text-[20px] font-poppins text-white">
                We offer a ground-floor opportunity in a disruptive African
                sustainability solution.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] w-[400px] bg-[#13172B] roundec-[30px] p-10 rounded-[50px] mb-20 mx-1">
            <img src={House2} alt="111" className="translate-y-[-60%]" />
            <div className="absolute top-[30%] left-0 p-10">
              <p className="text-[35px] font-poppins text-white leading-none mb-5 mx-1">
                Carbon Credit Standard Institutes
              </p>
              <p className="text-[20px] font-poppins text-white">
                Africoin enables CCSIs to significantly enhance their ability to
                ensure the integrity and transparency
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:mt-10 flex justify-around flex-wrap">
        <div className="relative p-10 flex flex-col justify-between items-left">
          <p className="text-left text-[45px] md:text-[64px] xl:text-[72px] font-poppins">
            Roadmap
          </p>
          <div className="text-left mt-[60px]">
            <p className="text-[36px] md:text-[45px] font-poppins">Q4-2023</p>
            <p className="text-[18px] md:text-[25px] font-poppins">
              Africoin Token listing on first CEX
            </p>
          </div>
          <div className="text-left mt-[60px]">
            <p className="text-[36px] md:text-[45px] font-poppins">Q4-2023</p>
            <p className="text-[18px] md:text-[25px] font-poppins">
              Africoin Token listing on first CEX
            </p>
          </div>
          <div className="text-left mt-[60px]">
            <p className="text-[36px] md:text-[45px] font-poppins">Q4-2023</p>
            <p className="text-[18px] md:text-[25px] font-poppins">
              Africoin Token listing on first CEX
            </p>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] w-[600px]">
          <img
            src={Circle}
            alt="Circle"
            className="absolute top-0 left-[50%] translate-x-[-50%] h-[400px] md:h-[600px] lg:h-[700px]"
          />
          <img
            src={tower}
            alt="Tower"
            className="absolute top-0 left-[50%] translate-x-[-50%] h-[400px] w-[360px] md:h-[600px] md:w-[540px] lg:h-[700px] lg:w-[630px]"
          />
        </div>
      </div>
      <div className=" h-full mt-20 lg:mt-40">
        <p className="text-left text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-poppins leading-none">
          Blog & <b className=" text-[#2A9646]">News</b>
        </p>
        <div className="flex justify-around flex-wrap mt-10">
          <BlogCard
            _id=""
            image="/uploads/1722394150567-back1.png"
            title={
              "Pioneering Eco-Responsible Blockchain in EU’s DigitalStrategy"
            }
            content={""}
            view={0}
            like={0}
          />
          <BlogCard
            image="/uploads/1722394092550-back2.png"
            title={"Dive into the world of Greenercoin with our Testnet!"}
            content={""}
            _id=""
            view={0}
            like={0}
          />
          <BlogCard
            image="/uploads/1722394163989-back3.png"
            title={
              "Pioneering Eco-Responsible Blockchain in EU’s DigitalStrategy"
            }
            content={""}
            _id=""
            view={0}
            like={0}
          />
        </div>
      </div>
      <div className="relative mt-20 lg:mt-60">
        <div className="border-solid border-2 rounded-[50px] p-10 lg:p-20">
          <p className="text-[45px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-none mb-5">
            Let's start minting!
          </p>
          <p className="text-[18px] md:text-[22px] xl:text-[25px] mb-10">
            Africoin empowers governments to achieve ambitious environmental
            goals through a secure, transparent, and efficient blockchain
            platform for carbon credit management.
          </p>
          <BlueLinkButton2 text="GET STARTED" link="/" />
        </div>
        <img
          src={Coin4}
          alt="coin"
          className="absolute left-[-10%] top-[60%] w-[20%] hidden sm:shown md:w-auto md:left-[-50px]"
        />
        <img
          src={Coin5}
          alt="coin"
          className="absolute right-[-9%] top-[60%] w-[18%] hidden sm:shown md:w-auto md:right-[-50px]"
        />
        <img
          src={Coin6}
          alt="coin"
          className="absolute right-[20%] top-[-9%] w-[22%] hidden sm:shown md:w-auto sm:top-[-70px]"
        />
        <img
          src={Coin7}
          alt="coin"
          className="absolute left-[5%] top-[-9%] w-[22%] hidden sm:shown md:w-auto md:left-[50px] sm:top-[-70px]"
        />
      </div>
      <div className=" mt-20">
        <p className="text-[45px] md:text-[64px] xl:text-[72px] font-poppins">
          Our Team
        </p>
        <p className="text-[18px] md:text-[22px] xl:text-[25px] font-poppins">
          We are experts of our skills and that's why we are different.
        </p>
        <div className="flex justify-around flex-wrap mt-10">
          <div className="relative h-[450px] lg:h-[600px] w-[400px] flex flex-col justify-between items-center">
            <img src={Man1} alt="Back 1" className="h-full w-[500px] my-5" />
            <div className="absolute bottom-0 text-[36px] font-poppins text-white leading-tight p-5">
              <p>Steps Jobs</p>
              <p>Artist</p>
            </div>
          </div>
          <div className="relative h-[450px] lg:h-[600px] w-[400px] flex flex-col justify-between items-center mt-10 md:mt-0">
            <img src={Man2} alt="Man2" className="h-full w-[500px] my-5" />
            <div className="absolute bottom-0 text-[36px] font-poppins text-white leading-tight p-5">
              <p>Martin Gupta</p>
              <p>CFO</p>
            </div>
          </div>
          <div className="relative h-[450px] lg:h-[600px] w-[400px] flex flex-col justify-between items-center">
            <img src={Man3} alt="Back 1" className="h-full w-[500px] my-5" />
            <div className="absolute bottom-0 text-[36px] font-poppins text-white leading-tight p-5">
              <p>Garry Lorrd</p>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full relative">
        <div className="flex justify-between flex-wrap mt-10 w-auto">
          <div className="ml-[5%] h-[800px] lg:h-[800px] xl:h-[1000px] p-10 items-left sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[55%] overflow-y-scroll">
            <p className="text-left text-[32px] lg:text-[45px] md:text-[64px] xl:text-[72px] font-poppins leading-none">
              Your questions
            </p>
            <p className="text-left text-[32px] lg:text-[45px] md:text-[64px] xl:text-[72px] font-poppins leading-none text-[#2A9646]">
              answered!
            </p>
            <div className="">
              <FAQSection />
            </div>
          </div>
          <img
            src={Road}
            alt="Road"
            className="absolute w-[65%] lg:right-[-25%] top-0 max-[1024px]:hidden lg:block"
          />
        </div>
      </div>
      <div className="mt-[100px] lg:mt-[200px] relative">
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
