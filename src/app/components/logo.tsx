import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/icons/logo.jpg" width={56} height={56} alt="logo"></Image>
    </Link>
  );
}
