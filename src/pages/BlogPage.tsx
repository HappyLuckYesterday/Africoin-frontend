import BlogCard from "../components/Cards/BlogCard";

const BlogPage = () => {
  const blogs = [
    {
      id: "",
      image: "./back1.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back2.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back3.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back1.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back2.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back3.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back1.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back2.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back3.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back1.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back2.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
    {
      id: "",
      image: "./back3.png",
      like: 0,
      view: 0,
      title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
      content:
        "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
    },
  ];

  return (
    <div>
      <div className="container">
        <h1 className="text-[72px] font-bold">Blog</h1>
        <div className="flex justify-around flex-wrap gap-3 mt-10">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
