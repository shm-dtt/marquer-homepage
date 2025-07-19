export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Marquer. All rights reserved.
          </p>
      </div>
    </footer>
  );
} 