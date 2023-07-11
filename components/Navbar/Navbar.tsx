import './Navbar.css';
import { NavLinks } from '@/constants/NavLinks';
import { NavLinksProps } from './Navbar.props';
import Link from 'next/link';
import Image from 'next/image';


export const Navbar = () => {

  const constructLinks = (links) => {
    return links.map(({href, key, text}) => {
      return (
        <Link href={href} key={key}>
          {text}
        </Link>
      )
    })
  }

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={115}
            height={43}
            alt="Course"
          />
          <ul className="xl:flex hidden text-small gap-7">
            {constructLinks(NavLinks)}
          </ul>
        </Link>
      </div>
    </nav>
  )
}
