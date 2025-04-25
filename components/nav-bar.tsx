import { navLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import Link from "next/link";

//px-3 py-1 font-bold text-black dark:text-white hover:-translate-y-1 hover:rotate-2 transform transition-all duration-200

export function NavBar() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden h-full md:flex"
      role="navigation"
    >
      <ul className="flex h-full items-center gap-4">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className="group px-3 py-1 transition-all duration-200 hover:-translate-y-2 hover:rotate-2"
          >
            <Link href={link.href} className={cn("font-normal")} scroll>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
