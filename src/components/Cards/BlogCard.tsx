import { useNavigate } from "react-router-dom";
import MiniTag from "../Buttons/MiniTag.";

interface BlogCardProps {
  _id: string;
  image: string;
  title: string;
  content: string;
  like: number;
  view: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  _id,
  image,
  title,
  content,
  like,
  view,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-[450px] w-[320px] rounded-[30px] mb-10 cursor-pointer hover:shadow-[0px_0px_20px_gray] border-2 border-solid border-[#e6e6e6]"
      onClick={() => navigate(`/blog/${_id}`)}
    >
      <img
        src={image}
        alt="back"
        className="w-full h-1/2 rounded-tl-[30px] rounded-tr-[30px] rounded-b-none"
      />
      {/* <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000002 100%)",
        }}
        className="absolute w-full h-[50%] left-0 top-[0%] rounded-[30px]"
      ></div> */}
      {/* <ArrowUpRightIcon className="absolute right-7 top-7 text-white w-9 h-9" /> */}
      <div className="absolute bottom-0 left-0 p-5 bg-[#ffffff] w-full h-[50%] rounded-br-[30px] rounded-bl-[30px]">
        <div className="items-left pb-5">
          <MiniTag text={"Crypto"} />
        </div>
        <p className="text-[24px] font-poppins text-black text-left mb-[50px] leading-none">
          {title}
        </p>
        <div className="flex justify-between items-center text-[16px]">
          <p className="text-[#2A9646]">20 Apr</p>
          {/* <div className="flex items-center">
            <p className="text-white p-1 mr-5">
              <HandThumbUpIcon className="size-6 inline" />
              {like}
            </p>
            <p className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              {view}
            </p> 
          </div> */}
        </div>
        {/* <p className='text-[25px] font-poppins text-white truncate'>{content}</p> */}
      </div>
    </div>
  );
};

export default BlogCard;
