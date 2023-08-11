import { MY_ICO, MY_NAME } from "@/data/config";
import { FaArchive } from "react-icons/fa";
import Image from "next/image";
import LeftBar from "@/components/LeftBar";
import PostPreview from "@/components/PostPreview";
import RightBar from "@/components/RightBar";

export default function Home() {
    return (
        <div className="flex flex-row relative justify-between">
            <div className="w-3/12">
                <LeftBar />
            </div>
            <div className="w-5/12">
                <PostPreview />
            </div>
            <div className="w-4/12">
                <RightBar />
            </div>
        </div>
    );
}
