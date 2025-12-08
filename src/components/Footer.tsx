export default function Footer() {
    return (
        <footer className="w-full flex justify-between fpx py-8 max-container gold-gradient text-primary ">
            <p className="">The Purpose Project — An Initiative of Cojective</p>
            <nav>
                <ul className="flex items-center gap-4">
                    <li><a href="">Contact</a></li>
                    <li>|</li>
                    <li><a href="">Terms And Condition</a></li>
                    <li>|</li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </nav>
        </footer>
    );
}