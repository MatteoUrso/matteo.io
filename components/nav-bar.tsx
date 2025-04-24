import Link from "next/link";

export function NavBar() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden h-full md:flex"
      role="navigation"
    >
      <ul className="flex items-center justify-center gap-10 text-sm">
        <li>
          <Link
            href="/projects"
            className="group text-text hover:underline hover:decoration-current hover:decoration-2 hover:underline-offset-4"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="group text-text hover:underline hover:decoration-current hover:decoration-2 hover:underline-offset-4"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="group text-text hover:underline hover:decoration-current hover:decoration-2 hover:underline-offset-4"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
