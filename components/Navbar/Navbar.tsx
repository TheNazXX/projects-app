import './Navbar.css';
import { NavLinks } from '@/constants/NavLinks';
import { NavLinksProps } from './Navbar.props';
import Link from 'next/link';
import Image from 'next/image';
import { AuthProviders } from '@/components';
import { getCurrentUser } from '@/lib/session';

export const Navbar = async () => {
  const session = await getCurrentUser();

  const constructLinks = (links: NavLinksProps[]) => {
    return links.map(({ href, key, text }) => {
      return (
        <Link href={href} key={key}>
          {text}
        </Link>
      );
    });
  };

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Course" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">{constructLinks(NavLinks)}</ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <>{session?.user?.image && <Image src={session.user.image} width={40} height={40} className="rounded-full" alt={session.user.name} />}</>
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};
