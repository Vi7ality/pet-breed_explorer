import Link from 'next/link';

export default function NavDesktop() {
  return (
    <nav className="hidden space-x-8 md:flex">
      <Link href="/" className="text-gray-700 hover:text-gray-900">
        Home
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-gray-900">
        About
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-gray-900">
        Contact
      </Link>
    </nav>
  );
}
