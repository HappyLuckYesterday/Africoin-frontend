import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface BlogCardProps {
  image: string;
  title: string;
  content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, content }) => {
  return (
    <div className="relative h-[600px] w-[400px] rounded-[30px] mb-5 cursor-pointer hover:shadow-[0px_0px_20px_gray]">
      <img src={image} alt="back" className="w-full h-full" />
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000002 100%)",
        }}
        className="absolute w-full h-[80%] left-0 top-[20%] rounded-[30px]"
      ></div>
      <ArrowUpRightIcon className="absolute right-7 top-7 text-white w-9 h-9" />
      <div className="absolute bottom-0 left-0 p-5">
        <p className="text-[35px] font-poppins text-white text-left mb-[50px] leading-none">
          {title}
        </p>
        <div className="flex justify-between items-center text-[20px]">
          <p className="text-[#2A9646]">20 Apr</p>
          <div className="flex items-center">
            <p className="text-white p-1 mr-5">
              <HandThumbUpIcon className="size-6 inline" />
              20
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
              20
            </p>
          </div>
        </div>
        {/* <p className='text-[25px] font-poppins text-white truncate'>{content}</p> */}
      </div>
    </div>
  );
};

export default BlogCard;
