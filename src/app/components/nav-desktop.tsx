import Link from 'next/link';

export default function NavDesktop() {
  return (
    <nav className="hidden space-x-8 md:flex">
      <Link href="/" className="text-gray-700 hover:text-green-500">
        Home
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-green-500">
        About
      </Link>
      <Link href="/contact" className="text-gray-700 hover:text-green-500">
        Contact
      </Link>
    </nav>
  );
}
