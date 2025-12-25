import Image from "next/image";
import GlowEffect from "./GlowEffect";
import { title } from "process";

export default function PainPoints() {
    const points = [
        {
            title: "What they were naturally good at",
            cardClass: "col-span-3 xl:col-span-2 col-start-1 row-start-1",

        },
        {
            title: "What made them feel alive",
            cardClass: "col-span-3 col-start-1 row-start-2 xl:col-span-2 xl:col-start-1 xl:row-start-2",

        },
        {
            title: "Why they felt low or confused",
            cardClass: "col-span-3 col-start-1 row-start-3 xl:col-span-2 xl:col-start-1 xl:row-start-3",

        },
        {
            title: "What step to take next",
            cardClass: "col-span-3 col-start-4 row-start-4 xl:col-span-2 xl:col-start-4 xl:row-start-4",

        },
        {
            title: "What direction aligned with who they are",
            cardClass: "col-span-3 col-start-7 row-start-1 xl:col-span-2 xl:col-start-7 xl:row-start-1",

        },
        {
            title: "Whether their passion could become income",
            cardClass: "col-span-3 col-start-7 row-start-2 xl:col-span-2 xl:col-start-7 xl:row-start-2",

        },
        {
            title: "How to rebuild confidence after failures",
            cardClass: "col-span-3 col-start-7 row-start-3 xl:col-span-2 xl:col-start-7 xl:row-start-3",

        },
    ];

    return (
        <section className="flex flex-col items-center fp gap-13 max-container text-white">
            <div className="text-2xl md:text-[38px] lg:text-[46px] font-big-shoulders font-normal ">We saw people who didn’t know:</div>

            <div className="w-full xl:w-[90%] grid grid-cols-9 xl:grid-cols-8 grid-rows-4 gap-4 md:gap-6 lg:gap-8 font-geist text-xs md:text-base lg:text-lg xl:text-xl font-normal">

                {points.map((point, index) => {
                    return (
                        <div key={index} className={`flex justify-center items-center p-2 sm:p-4 lg:px-9 lg:py-6 xl:px-11 xl:py-8 rounded-t-[15px] rounded-bl-[15px] md:rounded-t-[30px] md:rounded-bl-[30px] gold-gradient-dark text-center ${point.cardClass}`}>
                            {point.title}
                        </div>
                    );
                })}

                {/* Center Image */}
                <div className="relative flex justify-center items-center col-span-3 row-span-3 col-start-4 row-start-1 xl:col-span-4 xl:row-span-3 xl:col-start-3 xl:row-start-1">
                    <Image className="z-1 w-[90%] mlg:w-[70%] sm:w-[60%] h-auto xl:w-[246px] xl:h-[372px]" src="/images/question-mark.webp" alt="Question Mark" width={246} height={372} />
                    <GlowEffect opacity="opacity-50" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
            </div>
        </section>
    );
}
