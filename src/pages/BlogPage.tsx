import { useEffect, useState } from "react";
import BlogCard from "../components/Cards/BlogCard";
import { RowData } from "../components/Table/Blog/types";
import { fetchData } from "../components/Table/Blog/api";
import { DotLoader } from "react-spinners";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<RowData[]>([]);
  useEffect(() => {
    fetchData().then((data) => setBlogs(data));
  }, []);
  // const blogs = [
  //   {
  //     id: "",
  //     image: "./back1.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back2.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back3.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back1.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back2.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back3.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back1.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back2.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back3.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back1.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back2.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  //   {
  //     id: "",
  //     image: "./back3.png",
  //     like: 0,
  //     view: 0,
  //     title: "Carbon Credits: Basics, Regulations, And Issuance Process:",
  //     content:
  //       "A carbon credit (CC) is an emission permit for a specified amount of carbon dioxide (CO2) or other greenhouse gases (GHGs). Each credit represents one metric ton (2204 pounds) of CO2 or an equivalent amount of another GHG. Companies can receive credits if they reduce their emissions below a certain threshold. These credits can be generated through efforts like reforestation, energy conservation, and renewable energy projects.",
  //   },
  // ];

  return (
    <div>
      <h1 className="text-[72px] font-bold">Blog</h1>
      <div className="flex justify-around flex-wrap gap-12 mt-10 max-w-[1200px] mx-auto bg-[#f9f9f9]">
        {blogs.length === 0 && (
          <div className="flex flex-col justify-center items-center my-25 py-10">
            <DotLoader />
            <p className="text-2xl mt-20">Loading...</p>
          </div>
        )}
        {blogs.map((blog, index) => (
          <BlogCard
            _id={blog._id}
            key={index}
            image={blog.image}
            title={blog.title}
            content={blog.body}
            view={blog.view}
            like={blog.like}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
