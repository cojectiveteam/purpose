import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-white/10">
      <div className="max-container mx-auto fpx h-20 flex items-center justify-between font-big-shoulders font-semibold text-lg">

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-16">
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#services">About</NavLink>
          <NavLink href="#testimonials">Pages</NavLink>
          <NavLink href="#testimonials">Speakers</NavLink>
        </div>
        <div className="hidden md:flex items-center space-x-16">
          <NavLink href="#about">Gallery</NavLink>
          <NavLink href="#services">Sponsor</NavLink>
          <NavLink href="#testimonials">Faq</NavLink>
          <NavLink href="#testimonials">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-gold transition-colors tracking-widest"
    >
      {children}
    </Link>
  );
}
