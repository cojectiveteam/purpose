import Image from "next/image";
import GlowEffect from "./GlowEffect";
import { Linefont } from "next/font/google";

export default function Session() {

    const beforeSession = [
        {
            lineWidth: "11vw",
            text: "I don’t know what I’m good at."
        },
        {
            lineWidth: "20vw",
            text: "Everything drains me."
        },
        {
            lineWidth: "26vw",
            text: "I don’t feel confident."
        },
        {
            lineWidth: "32vw",
            text: "I don’t know what to choose."
        },
        {
            lineWidth: "26vw",
            text: "I’m sacred to start."
        },
        {
            lineWidth: "20vw",
            text: "I feel stuck and lost."
        },
        {
            lineWidth: "11vw",
            text: "I think others are ahead of me."
        },

    ]
    const afterSession = [
        {
            lineWidth: "11vw",
            text: "I don’t know what I’m good at."
        },
        {
            lineWidth: "20vw",
            text: "Everything drains me."
        },
        {
            lineWidth: "26vw",
            text: "I don’t feel confident."
        },
        {
            lineWidth: "32vw",
            text: "I don’t know what to choose."
        },
        {
            lineWidth: "26vw",
            text: "I’m sacred to start."
        },
        {
            lineWidth: "20vw",
            text: "I feel stuck and lost."
        },
        {
            lineWidth: "11vw",
            text: "I think others are ahead of me."
        },

    ]
    return (
        <section className="relative fpy max-container text-white font-big-shoulders">
            <GlowEffect bgClass="bg-primary" className="top-1/2 left-0 -translate-y-1/2" />
            <GlowEffect className="top-1/2 right-0 -translate-y-1/2" />

            {/* Desktop View */}
            <div className="hidden sm:flex flex-col justify-between items-stretch gap-9">
                <Image className="z-1 w-[718px] h-[414px] sm:w-full sm:h-auto fpr" src="images/before-session.svg" alt="Before Session" width={718} height={414} />
                <div className="w-px bg-white shrink-0"></div>
                <Image className="z-1 w-[720px] h-[414px] sm:w-full sm:h-auto fpl" src="images/after-session.svg" alt="After Session" width={720} height={414} />
            </div>
            {/* End of Desktop view */}

            {/* Mobile View */}
            <div className="sm:hidden flex flex-col gap-13 z-1">
                <div className="min-h-[170px] self-center flex items-center justify-center bg-primary px-6 py-2 text-2xl text-center uppercase rounded-b-full">Before The <br /> Session</div>

                <div className="w-full flex flex-col gap-6 text-sm mlg:text-base">
                    {beforeSession.map((item, index) => (
                        <div key={index} className="flex gap-3">
                            {/* Line */}
                            <div className="flex items-center">
                                <div style={{ width: item.lineWidth }}
                                    className="h-px bg-primary"></div>
                                <div className="w-[5px] h-[5px] bg-primary rounded-full"></div>
                            </div>
                            {/* End of Line */}

                            {/* Icon */}
                            <Image src="/icons/question-mark.svg" alt="Question Mark" width={16} height={16} />
                            {/* End of Icon */}

                            {/* Text */}
                            <div>“{item.text}.”</div>
                            {/* End of Text */}
                        </div>
                    ))}
                </div>

                <div className="min-h-[170px] self-center flex items-center justify-center gold-gradient px-6 py-2 text-2xl text-center uppercase rounded-b-full">After The <br /> Session</div>

                <div className="w-full flex flex-col items-end gap-6 text-sm mlg:text-base">
                    {beforeSession.map((item, index) => (
                        <div key={index} className="flex gap-3">

                            {/* Text */}
                            <div>“{item.text}.”</div>
                            {/* End of Text */}

                            {/* Icon */}
                            <Image src="/icons/check-mark-yellow.svg" alt="Check Mark" width={16} height={16} />
                            {/* End of Icon */}
                            {/* Line */}
                            <div className="flex items-center">
                                <div className="w-[5px] h-[5px] gold-gradient rounded-full"></div>
                                <div style={{ width: item.lineWidth }}
                                    className="h-px gold-gradient"></div>

                            </div>
                            {/* End of Line */}




                        </div>
                    ))}
                </div>

            </div>
            {/* End of Mobile View */}
        </section>
    );
}