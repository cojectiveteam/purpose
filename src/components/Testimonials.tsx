export default function Testimonials() {
    return (
        <section className="w-full flex flex-col gap-20 fp max-container">

            <div className="flex flex-col gap-13">
                {/* First Row */}
                <div className="flex flex-col gap-5">
                    <div className="text-lg gold-text">[ Students reviews ]</div>
                    <h2 className="text-[58px] font-big-shoulders font-semibold text-white uppercase ">What Our students Say</h2>
                </div>
                {/* End of First Row */}

                {/* Second Row */}
                <div className="flex gap-20">
                    {/* Left Column */}
                    <div className="w-[70%] flex flex-col gap-13">


                        {/* Second Row */}
                        <div className="flex gap-13">
                            <div className="w-[60%] bg-background-light rounded-[30px]"></div>
                            <div className="w-[40%] flex flex-col gap-10">
                                <div className="bg-primary w-20 h-15"></div>
                                <div className="flex flex-col gap-6 text-white">
                                    <div className="text-[36px] font-big-shoulders font-semibold gold-text uppercase">“I walked in confused. I walked out with direction.”</div>
                                    <p>I had spent months overthinking my career. This session made me see my strengths clearly for the first time.</p>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-lg font-big-shoulders gold-text uppercase font-semibold leading-none">— Sneha, Student</div>
                                        <div className="text-xs text-white">Student</div>
                                    </div>
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <div key={i} className="w-5 h-5 bg-[#FFBE15]"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of Second Row */}
                    </div>
                    {/* End of Left Column */}

                    {/* Right Column */}
                    <div className="w-[30%] bg-background-light rounded-[30px]"></div>
                    {/* End of Right Column */}
                </div>
                {/* End of First Row */}
            </div>

            <div className="w-full flex  items-center gap-5">
                <div className="h-[2px] w-full bg-[repeating-linear-gradient(to_right,#fff_0_6px,transparent_6px_20px)]">
                </div>
                <div className="flex gap-22 text-[58px] font-big-shoulders font-semibold text-primary">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>


            </div>
        </section>
    );
}
