import PrimaryButton from "./PrimaryButton";
import Image from "next/image";

export default function Curriculum() {


    return (
        <section className="flex flex-col items-center   fpt bg-background max-container text-white ">
            <div className="flex flex-col gap-19 fpx items-center">
                {/* First Row */}
                <div className="flex flex-col items-center gap-6 font-big-shoulders">
                    <h2 className="text-[64px] gold-text">WHAT YOU WILL LEARN</h2>
                    <div className="w-[60%] text-[46px] text-center">What you will experience inside the FREE live session</div>
                </div>
                {/* End of First Row */}

                {/* Second Row */}
                <div className="flex flex-col items-center gap-14">
                    <div className="grid grid-cols-3 grid-rows-3 gap-9">
                        <div className="flex flex-col gap-5 bg-background-dark rounded-[20px] p-6">
                            <div className="text-[25px] font-big-shoulders gold-text">1. A guided journey into self-awareness</div>
                            <p>You will understand the root of your thoughts, behaviors, choices, and strengths through scientifically backed reflection tools.</p>
                        </div>
                        <div className="flex flex-col gap-5 bg-background-dark rounded-[20px] p-6">
                            <div className="text-[25px] font-big-shoulders gold-text">2. Your Strength Blueprint</div>
                            <p>Learn how to identify natural strengths you’ve never noticed — strengths shaped by your personality, patterns, and lived experiences.</p>
                        </div>
                        <div className="flex flex-col gap-5 bg-background-dark rounded-[20px] p-6">
                            <div className="text-[25px] font-big-shoulders gold-text">3. The Energy Alignment Method</div>
                            <p>Understand what drains you emotionally vs what energizes and excites you — crucial for choosing a career direction you can sustain long-term.</p>
                        </div>
                        <div className="flex flex-col gap-5 bg-background-dark rounded-[20px] p-6">
                            <div className="text-[25px] font-big-shoulders gold-text">4. Your Earnable Passion Zone</div>
                            <p>A practical insight on how to align what you love, what you’re good at, and what the world pays for — without unrealistic expectations.</p>
                        </div>
                        <div className="flex flex-col gap-5 bg-background-dark rounded-[20px] p-6">
                            <div className="text-[25px] font-big-shoulders gold-text">5. Breaking Limiting Beliefs & Conditioning</div>
                            <p>Learn why you feel low confidence, imposter syndrome, or self-doubt — and how to begin rewiring these patterns.</p>
                        </div>
                        <div className="flex flex-col gap-5 bg-background-dark rounded-[20px] p-6">
                            <div className="text-[25px] font-big-shoulders gold-text">6. The Confidence Loop Framework</div>
                            <p>Understand how confidence is built through small wins, evidence, and alignment — not motivation.</p>
                        </div>
                        <div className="flex flex-col gap-5  p-6">

                        </div>
                        <div className="flex flex-col gap-5 bg-background-dark rounded-[20px] p-6">
                            <div className="text-[25px] font-big-shoulders gold-text">7. Your 30-Day Purpose Plan</div>
                            <p>A simple, clear guide on where to begin, what to do next, and how to build momentum.</p>
                        </div>
                        <div className="flex flex-col gap-5  p-6">

                        </div>
                    </div>

                    <PrimaryButton> I Want This Clarity</PrimaryButton>
                </div>
                {/* End of Second Row */}

                {/* Third Row */}
                <div className="w-full flex flex-col items-center gap-16">
                    <div className="w-[40%] text-[46px] font-big-shoulders text-center">Why most people feel stuck and how to break the cycle</div>

                    <div className="relative w-full flex justify-center pt-22 capitalize">
                        <Image src="/images/young-woman.webp" alt="curriculum" width={587} height={616} />


                        {/* Left Alignment */}
                        <div className="absolute top-10 left-60  bg-background-dark rounded-t-[20px] rounded-bl-[20px] p-6">
                            A powerful self-discovery <br /> exercise to uncover <br /> hidden strengths
                        </div>
                        <div className="absolute top-60 left-45  bg-background-dark rounded-t-[20px] rounded-bl-[20px] p-6">
                            How to evaluate career <br /> options with a clarity- <br /> first mindset
                        </div>
                        <div className="absolute top-110 left-20  bg-background-dark rounded-t-[20px] rounded-bl-[20px] p-6">
                            The one clarity question <br /> that instantly shifts your <br /> thinking
                        </div>

                        {/* End of Left Alignment */}

                        {/* Right Alignment */}
                        <div className="absolute top-0 right-60  bg-background-dark rounded-t-[20px] rounded-br-[20px] p-6">
                            Understanding identity,<br /> purpose, and energy <br /> alignment
                        </div>
                        <div className="absolute top-40 right-10  bg-background-dark rounded-t-[20px] rounded-br-[20px] p-6 min-h-[120px]">
                            How to find your “why” <br /> without confusion
                        </div>
                        <div className="absolute top-80 right-10  bg-background-dark rounded-t-[20px] rounded-br-[20px] p-6">
                            Understanding identity,<br /> purpose, and energy <br /> alignment
                        </div>
                        <div className="absolute top-120 right-55  bg-background-dark rounded-t-[20px] rounded-br-[20px] p-6">
                            Reflection tasks + a <br /> guided breakthrough <br /> moment
                        </div>

                        {/* End of Right Alignment */}
                    </div>
                </div>
                {/* End of Third Row */}


            </div>
            <div className="w-full flex flex-col items-center gap-0 fp font-big-shoulders bg-background-light">
                <h2 className="text-[64px]  text-primary">WHAT YOU WILL LEARN</h2>
                <div className="text-[25px] text-text font-semibold">See the transformation you’ll experience in just one session</div>
            </div>
        </section>
    );
}
