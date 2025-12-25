import Image from "next/image";
import GlowEffect from "./GlowEffect";

export default function StartingPoint() {
    return (
        <section className="max-container fpx">
            <div className="relative flex flex-col items-center gap-3 md:gap-13 bg-[#343434] text-white fp rounded-[20px] md:rounded-[30px] overflow-hidden">
                <Image className='absolute top-20 left-10' src="/icons/spark-multi.svg" alt="spark" width={106.19} height={105.51} />
                <Image className='absolute bottom-70 right-14' src="/icons/spark.svg" alt="spark" width={60.9} height={61.25} />
                <Image className='absolute bottom-0 right-5 w-[46.5px] h-[79.2px] md:w-[155px] md:h-[264px]' src="/images/person-smile.webp" alt="Person Smile" width={155} height={264} />
                <GlowEffect opacity="opacity-50" className="-bottom-25 -left-25" />
                <GlowEffect opacity="opacity-50" className="-top-25 -right-25" />
                <div className="flex flex-col items-center text-center gap-3 md:gap-5">
                    <p>Traditional career guidance did not help them — because it focused only on jobs, resumes, and interviews.</p>
                    <div className="text-lg md:text-[26px] font-big-shoulders gold-text capitalize">But clarity begins much before that.</div>
                    <p>It begins with YOU.</p>
                    <p className="w-full md:w-[85%]">That’s why we created The Purpose Project — a space where individuals can discover who they truly are, what energizes them, and what direction finally makes sense.</p>
                </div>
                <div className="text-lg md:text-[26px] font-big-shoulders gold-text capitalize">This session is that starting point.</div>
            </div>
        </section>
    );
}