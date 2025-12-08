import PrimaryButton from "./PrimaryButton";

export default function CallToAction() {
    return (
        <section className="w-full flex gap-20 fp max-container text-white">
            <div className="w-1/2 flex flex-col gap-10  ">
                <div className="flex flex-col gap-5">
                    <div className="text-lg font-big-shoulders">Your clarity is one step away.</div>
                    <h2 className="text-[58px] font-big-shoulders font-semibold leading-tight uppercase ">Your clarity is one step away.</h2>
                </div>
                <p>Join The Purpose Project — a free session that helps you discover yourself, your purpose, and your next step.</p>
                <PrimaryButton>Register For Free</PrimaryButton>
            </div>
            <div className="w-1/2 bg-background-light rounded-[30px] "></div>
        </section>
    );
}