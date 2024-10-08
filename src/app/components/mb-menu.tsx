import Link from 'next/link';

export default function MobileMenu() {
  return (
    <nav className="md:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <Link
          href="/"
          className="block rounded-md px-3 py-2 text-gray-700 hover:text-green-500"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block rounded-md px-3 py-2 text-gray-700 hover:text-green-500"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block rounded-md px-3 py-2 text-gray-700 hover:text-green-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
