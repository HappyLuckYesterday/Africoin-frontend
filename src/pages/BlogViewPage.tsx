import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../components/Table/Blog/api";
import { RowData } from "../components/Table/Blog/types";
import MiniTag from "../components/Buttons/MiniTag.";

const BlogViewPage = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState<RowData>({
    _id: "",
    image: "",
    title: "",
    body: "",
    view: 0,
    like: 0,
  });

  useEffect(() => {
    if (id) {
      getBlog(id).then((data) => setBlogData(data));
    }
  }, []);

  // if (!blogData) {
  //     return <div>Loading...</div>;
  // }

  return (
    <div className="sm:container mx-auto sm:mx-auto sm:p-4">
      <div className="flex flex-col sm:gap-6">
        <div className="relative w-full text-left px-5">
          <div className="relative mx-auto md:float-left h-[360px] sm:h-[420px] lg:h-[500px] w-full rounded-[30px] mb-4 md:mr-10 cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition-shadow duration-300 ease-in-out">
            <img
              src={blogData.image}
              alt="back"
              className="w-full h-full object-cover rounded-[30px]"
            />
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000002 100%)",
              }}
              className="absolute w-full h-full left-0 top-0 rounded-[30px]"
            ></div>
            {/* <ArrowUpRightIcon className="absolute right-7 top-7 text-white w-9 h-9" /> */}
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-[20px] sm:text-[24px] font-poppins text-white text-left mb-[30px] sm:mb-[50px] leading-none">
                {blogData.title}
              </p>
              <div className="flex justify-between items-center text-[14px] sm:text-[16px]">
                <p className="text-[#2A9646]">20 Apr</p>
              </div>
            </div>
          </div>
          <div className="items-left pb-5">
            <MiniTag text={"Crypto"} />
          </div>
          <h1 className="text-[36px] font-bold mb-4 mx-5">{blogData.title}</h1>
          <p className="text-[18px] leading-relaxed mx-5">{blogData.body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogViewPage;
