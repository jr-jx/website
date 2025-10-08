import { FaJs, FaPython, FaFile, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTypescript, SiKotlin, SiGo, SiMdx } from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";

export default function Icon({ name }: { name: string }) {
    switch(name) {
        case "js":
            return <FaJs className="text-yellow-500 size-4" />;
        case "ts":
            return <SiTypescript className="text-blue-500 size-4" />;
        case "py":
            return <FaPython className="text-green-500 size-4" />;
        case "java":
            return <AiOutlineJava className="text-red-500 size-4" />;
        case "kotlin":
            return <SiKotlin className="text-purple-500 size-4" />;
        case "go":
            return <SiGo className="text-blue-500 size-4" />;
        case "txt":
            return <FaFile className="text-gray-500 size-4" />;
        case "md":
            return <SiMdx className="text-gray-500" />;
        case "mdx":
            return <SiMdx className="text-gray-500 size-4" />;
        case "html":
            return <FaHtml5 className="text-red-500 size-4" />;
        case "css":
            return <FaCss3 className="text-blue-500 size-4" />;
    }
}