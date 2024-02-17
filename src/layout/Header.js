"use client";

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const ulRef = useRef();

  useEffect(() => {
    if (!ulRef.current) return;

    const url = pathname;

    console.log('location', pathname);

    const ul = ulRef.current;

    if (url === '/discover') {
      ul.children[0].classList.remove('active');
      ul.children[1].classList.add('active');
    } else if (url == '/') {
      ul.children[1].classList.remove('active');
      ul.children[0].classList.add('active');
    }
  }, [pathname]);


  return (
    <header className="main-header">
      <nav>
        <h2>
          Optimum Aqua Environment
        </h2>

        <ul ref={ulRef} className="nav-links">
          <li className='active'><Link href="/">Home</Link></li>
          <li><Link href="/discover">Discover</Link></li>
          <li><Link href="#">Control</Link></li>
          <li><Link href="#">History</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header