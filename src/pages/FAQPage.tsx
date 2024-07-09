import FAQSection from "../components/FAQ/FAQSection";

const FAQPage = () => {
  return (
    <div>
      <div className="container lg:px-32 md:px-20">
        <h1 className="lg:text-[65px] md:text-[60px] sm:text-[55px] text-[45px]  font-bold">
          Frequently Asked Questions
        </h1>
        <FAQSection />
      </div>
    </div>
  );
};

export default FAQPage;
