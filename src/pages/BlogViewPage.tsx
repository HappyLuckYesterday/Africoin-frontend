import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../components/Table/Blog/api";
import { RowData } from "../components/Table/Blog/types";

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
        <div>
        <h1>{blogData.title}</h1>
        <p>{blogData.body}</p>
        {/* Render other blog details as needed */}
        </div>
    );
}

export default BlogViewPage;