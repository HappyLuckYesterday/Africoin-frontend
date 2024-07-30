import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../components/Table/Blog/api";
import { RowData } from "../components/Table/Blog/types";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const BlogViewPage = () => {
    const { id } = useParams();
    const [blogData, setBlogData] = useState<RowData>({_id: '', image: '', title: '', body: '', view: 0, like: 0});

    useEffect(() => {
        if (id) {
            getBlog(id).then(data => setBlogData(data));
        }
    }, []);    
    
    // if (!blogData) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="flex flex-wrap text-center items-center">
            <div className="relative h-[500px] w-[320px] rounded-[30px] mb-10 cursor-pointer hover:shadow-[0px_0px_20px_gray]">
                <img src="./back1.png" alt="back" className="w-full h-full mx-auto" />
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
                    {blogData.title}
                    </p>
                    <div className="flex justify-between items-center text-[20px]">
                        <p className="text-[#2A9646]">20 Apr</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>{blogData.title}</h1>
                <p>{blogData.body}</p>
            </div>
        </div>
    );
}

export default BlogViewPage;