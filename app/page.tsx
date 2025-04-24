import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Button size="icon">
        <Icons.gitHub />
      </Button>
    </main>
  );
}

/**
 * hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none
 */
