import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6 pt-16">
      <header className="flex flex-col items-center gap-6 mb-16">
        <div className="flex items-center gap-4 mb-2">
          <Image src="/marquer.svg" alt="Marquer Logo" width={56} height={56} />
          <span className="text-4xl font-bold text-[#3769FF]">Marquer</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 text-center drop-shadow-lg mb-2">
          Share Your Web, Instantly.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mt-2 mb-2">
          An extension/add-on that makes it easy to share your bookmark
          collections with friends, colleagues, or across devices.
        </p>
      </header>
      <div className="flex flex-col sm:flex-row gap-6 mb-20 w-full max-w-md justify-center items-center">
        <a
          href="https://chromewebstore.google.com/detail/marquer-bookmark-sharer/nnjafiphfgecelkgfiedpbemffhcbmjn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 rounded-full bg-[var(--color-blue)] text-white font-semibold text-base shadow hover:bg-[#2850b8] transition-colors border-2 border-[var(--color-blue)] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 w-full sm:w-auto max-w-xs mx-auto"
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
          className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 rounded-full bg-[var(--color-yellow)] text-white font-semibold text-base shadow hover:bg-[#cc9600] transition-colors border-2 border-[var(--color-yellow)] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-200 w-full sm:w-auto max-w-xs mx-auto"
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
      <footer className="text-gray-400 text-sm mt-auto mb-2 text-center">
        &copy; {new Date().getFullYear()} Marquer. All rights reserved.
      </footer>
    </div>
  );
}
