export default function Story() {
    return (
        <section className="flex fpx gap-10 max-container">
            {/* Left Column */}
            <div className="w-1/2 flex flex-col gap-8 text-white">
                <div className="flex flex-col gap-0">
                    <h2 className="text-[64px] font-big-shoulders font-bold  uppercase gold-text">
                        THE ORIGIN STORY
                    </h2>
                    <div className="text-[42px] font-geist font-light leading-tight">
                        Why we built The Purpose Project  a message directly from the mentors.
                    </div>
                </div>

                <div className="text-xl font-geist font-medium">Over 5 decades of collect working experience in HR and leadership, we’ve watched something heartbreaking repeat itself:</div>
                <div className="flex flex-col gap-5">
                    <p>Brilliant people doubting themselves.</p>
                    <p>Talented students feeling lost.</p>
                    <p>Capable professionals unable to move forward.</p>
                    <p>Women returning to the workforce feeling invisible.</p>
                    <p>Freshers confused about where to begin.</p>

                </div>

                <div className="flex flex-col gap-5">
                    <p>Not because they lacked skills.</p>
                    <p>Not because they weren’t smart.</p>
                    <p>Not because they didn’t try.</p>
                </div>
                <p>But because they lacked the one thing that truly creates momentum: CLARITY.</p>
            </div>
            {/* End of Left Column */}

            {/* Right Column */}
            <div className="w-1/2 flex items-end gap-5">
                <div className="w-[40%] h-[275px] bg-amber-100 rounded-t-full"></div>
                <div className="w-[60%] h-[563px] bg-amber-100 rounded-t-full border-l-15 border-accent"></div>
            </div>
            {/* End of Right Column */}
        </section>
    );
}
