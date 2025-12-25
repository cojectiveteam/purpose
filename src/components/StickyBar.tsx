import CountdownTimer from "./CountdownTimer";
import PrimaryButton from "./PrimaryButton";

export default function StickyBar() {
    return (
        <section className="w-full flex justify-between items-center fpx py-5 md:py-4 max-container sticky bottom-0 z-50 bg-white rounded-t-[20px]">
            <div className="text-lg mmd:text-xl mlg:text-2xl md:text-[48px] font-big-shoulders font-semibold uppercase">event starts in</div>
            <CountdownTimer variant="minimal" />
            <PrimaryButton className="hidden md:flex">Register For Free</PrimaryButton>
        </section>
    );
}