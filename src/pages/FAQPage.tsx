import FAQSection from "../components/FAQ/FAQSection";

const FAQPage = () => {
  return (
    <div className="lg:px-32 md:px-20 xl:px-[200px]">
      <h1 className="lg:text-[65px] md:text-[60px] sm:text-[55px] text-[45px]  font-bold">
        Frequently Asked Questions
      </h1>
      <FAQSection />
    </div>
  );
};

export default FAQPage;
