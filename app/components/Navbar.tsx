import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Image src="/favicon.ico" alt="Marquer Logo" width={32} height={32} />
            <span className="text-xl font-bold text-[#3769FF]">Marquer</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-[#3769FF] transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-[#3769FF] transition-colors font-medium"
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-700 hover:text-[#3769FF] transition-colors font-medium"
            >
              Pricing
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="https://chromewebstore.google.com/detail/marquer-bookmark-sharer/nnjafiphfgecelkgfiedpbemffhcbmjn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#3769FF] transition-colors font-medium"
            >
              Log in
            </Link>
            <Link 
              href="https://chromewebstore.google.com/detail/marquer-bookmark-sharer/nnjafiphfgecelkgfiedpbemffhcbmjn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3769FF] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2d5ae8] transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 