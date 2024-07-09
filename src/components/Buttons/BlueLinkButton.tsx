import { Link } from "react-router-dom";
import "@fontsource/inter"; // Defaults to weight 400
import { ArrowUpRightIcon as ArrowUpRightOutline } from "@heroicons/react/24/outline";
const BlueLinkButton: React.FC<{ text: string; link: string }> = ({
  text,
  link,
}) => {
  return (
    <Link
      to={link}
      className="bg-gradient-to-tr from-[#2600FC] to-[#048343] hover:bg-gradient-to-bl hover:shadow-[2px_2px_2px_gray] text-white block py-4 px-8 rounded-3xl min-[500px]:text-[16px] max-[500px]:text-[10px] top-[50%] font-semibold font-inter"
    >
      {text}
      <ArrowUpRightOutline className="w-6 h-6 inline pl-2" />
    </Link>
  );
};
export default BlueLinkButton;
