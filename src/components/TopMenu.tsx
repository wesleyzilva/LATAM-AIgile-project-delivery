import Link from "next/link";

export default function TopMenu() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A2540] text-white shadow-md flex items-center justify-between px-6 py-3">
      <div className="font-extrabold text-lg tracking-tight">
        Wesley <span className="text-[#FF6B00]">|</span> LATAM BR <span className="text-[#FF6B00]">|</span> Agile Delivery
      </div>
      <div className="flex gap-6 text-sm font-semibold">
        <a href="#home" className="hover:text-[#FF6B00] transition-colors">Home</a>
        <a href="#services" className="hover:text-[#FF6B00] transition-colors">Services</a>
        <a href="#portfolio" className="hover:text-[#FF6B00] transition-colors">Portfolio</a>
        <a href="#blog" className="hover:text-[#FF6B00] transition-colors">Blog</a>
        <Link href="/contact" className="hover:text-[#FF6B00] transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
