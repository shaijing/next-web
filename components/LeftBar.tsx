import { MY_NAME } from "@/data/config";

export default function LeftBar() {
    return (
        <>
            <div className=" flex-col">
                <h1 className="font-extrabold text-2xl tracking-tight mb-4">
                    {MY_NAME}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Developer and Writer
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                    All good things come to those who wait.
                </p>
            </div>
            {/* <div className="relative mr-auto">
                    <Image
                        className="rounded-full"
                        alt={MY_NAME}
                        width={120}
                        height={120}
                        src={`${MY_ICO}`}
                        priority
                    />
                </div> */}
        </>
    );
}
