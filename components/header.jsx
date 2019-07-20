import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


export default function Header() {
  return (
    <Navbar className="justify-content-between" as="header" bg="dark" variant="dark">
      <Link href="/">
        <a>
          <Navbar.Brand as="h1">mpaste</Navbar.Brand>
        </a>
      </Link>

      <Nav>
        <NavItem>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </NavItem>
      </Nav>

      <style jsx global>
        {`
          header .nav-item {
            padding: .5rem;
          }

          header .nav-item:last-child {
            padding-right: 0;
          }
        `}
      </style>
    </Navbar>
  );
}
