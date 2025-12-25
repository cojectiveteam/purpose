import Image from "next/image";
import GlowEffect from "./GlowEffect";

export default function Attend() {
    return (
        <section className="relative flex fp justify-center items-center">
            <GlowEffect className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            {/* Desktop Image */}
            <Image className="hidden z-1" src="/images/attend.svg" alt="Attend" width={1335} height={551} />
            <Image className="hidden w-[726px] h-[664px] sm:w-full sm:h-auto sm:block  z-1" src="/images/attend-tab.svg" alt="Attend" width={726} height={664} />
            {/* End Desktop Image */}
            {/* Mobile Image */}
            <div className="flex flex-col gap-15 items-center sm:hidden">
                <Image className="w-full z-1" src="/images/attend-mob.svg" alt="Attend" width={347} height={675} />
                <Image className="w-full z-1" src="/images/not-attend-mob.svg" alt="Attend" width={372} height={568} />
            </div>
            {/* End Mobile Image */}
        </section>
    );
}