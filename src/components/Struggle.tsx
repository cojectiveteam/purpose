export default function Struggle() {
    return (
        <section className="flex flex-col items-center gap-25 max-container fp">
            {/* First Row */}
            <div className="flex flex-col items-center gap-8 font-big-shoulders">
                <h2 className="text-[46px] text-white font-normal">You’re not lost. You’re just not guided.</h2>
                <div className="text-[26px] gold-text font-semibold">Most people struggle because they:</div>
            </div>
            {/* End of First Row */}

            {/* Second Row */}
            <div className="w-[70%] grid grid-cols-3 grid-rows-2 gap-15 text-xl text-center">
                <div className="flex items-center justify-center bg-background-dark px-11 py-8 rounded-[30px]">
                    <div className="gold-text">Why they felt low or confused</div>
                </div>
                <div className="flex items-center justify-center bg-background-dark px-11 py-8 rounded-[30px]">
                    <div className="gold-text">Can’t identify what excites them</div>
                </div>
                <div className="flex items-center justify-center bg-background-dark px-11 py-8 rounded-[30px]">
                    <div className="gold-text">Have been conditioned to doubt themselves</div>
                </div>
                <div className="flex items-center justify-center bg-background-dark px-11 py-8 rounded-[30px]">
                    <div className="gold-text">Follow others’ paths instead of their own</div>
                </div>
                <div className="flex items-center justify-center bg-background-dark px-11 py-8 rounded-[30px]">
                    <div className="gold-text">Feel overwhelmed with choices</div>
                </div>
                <div className="flex items-center justify-center bg-background-dark px-11 py-8 rounded-[30px]">
                    <div className="gold-text">Fear making the wrong move</div>
                </div>
            </div>
            {/* End of Second Row */}


            {/* Third Row */}
            <div className="flex flex-col items-center gap-15 text-white">
                <div className="text-[25px] font-big-shoulders gold-text">This leads to:</div>
                <div className="grid grid-cols-5 grid-rows-1 gap-15 font-geist text-lg">
                    <div className="flex flex-col items-center justify-center gap-2 bg-background-dark px-8 py-3 rounded-[20px]">
                        <div className="w-8 h-8 gold-gradient"></div>
                        <div>Confusion</div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 bg-background-dark px-8 py-3 rounded-[20px]">
                        <div className="w-8 h-8 gold-gradient"></div>
                        <div>Self-Doubt</div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 bg-background-dark px-8 py-3 rounded-[20px]">
                        <div className="w-8 h-8 gold-gradient"></div>
                        <div>Procrastination</div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 bg-background-dark px-8 py-3 rounded-[20px]">
                        <div className="w-8 h-8 gold-gradient"></div>
                        <div>Anxiety</div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 bg-background-dark px-8 py-3 rounded-[20px]">
                        <div className="w-8 h-8 gold-gradient"></div>
                        <div>Feeling Stuck</div>
                    </div>
                </div>
                <p>The Purpose Project breaks this cycle by giving you clarity, direction, and understanding of YOUR unique path.</p>
            </div>
            {/* End of Third Row */}
        </section>
    );
}