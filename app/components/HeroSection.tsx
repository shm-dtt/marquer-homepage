import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="flex flex-col items-center gap-6 mb-16">
          <div className="flex items-center gap-4 mb-2">
            <Image src="/favicon.ico" alt="Marquer Logo" width={56} height={56} />
          </div>
          <h1 className="lg:text-6xl text-4xl font-medium text-gray-900 text-center drop-shadow-lg mb-2">
            Share Your Web, Instantly.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mt-2 mb-2">
            Marquer is an extension/add-on that makes it easy to share your bookmark
            collections with friends, colleagues.
          </p>
        </header>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-12 w-full max-w-md justify-center items-center mx-auto">
          <a
            href="https://chromewebstore.google.com/detail/marquer-bookmark-sharer/nnjafiphfgecelkgfiedpbemffhcbmjn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 rounded-full bg-[var(--color-blue)] text-white font-semibold text-base shadow-lg hover:bg-[var(--color-blue)] transition-all duration-200 border-2 border-[var(--color-blue)] hover:scale-105 w-full sm:w-auto max-w-xs mx-auto transform hover:shadow-xl"
          >
            <Image
              src="https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg"
              alt="Chrome Web Store"
              width={28}
              height={28}
            />
            <span>Get for Chrome</span>
          </a>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/marquer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 rounded-full bg-[var(--color-yellow)] text-white font-semibold text-base shadow-lg hover:bg-[var(--color-yellow)] transition-all duration-200 border-2 border-[var(--color-yellow)] hover:scale-105 w-full sm:w-auto max-w-xs mx-auto transform hover:shadow-xl"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
              alt="Firefox Add-ons"
              width={28}
              height={28}
            />
            <span>Get for Firefox</span>
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">
            Trusted by thousands(soon? lol) of users worldwide
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Free Forever</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Cross-platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 