import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Me } from "@/config/me";
import Link from "next/link";

export function Socials() {
  return (
    <div className="flex items-center gap-4">
      <Button size="icon" asChild>
        <Link
          href={Me.socials.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.gitHub />
        </Link>
      </Button>
      <Button size="icon" variant="secondary" asChild>
        <Link
          href={Me.socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.twitter />
        </Link>
      </Button>
      <Button size="icon" variant="tertiary" asChild>
        <Link
          href={Me.socials.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.linkedIn />
        </Link>
      </Button>
    </div>
  );
}
