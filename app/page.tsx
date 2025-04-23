import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <button
        className={cn(
          "text-text rounded-base font-base inline-flex items-center justify-center text-sm whitespace-nowrap transition-all",
          "bg-primary",
          "shadow-neobrutalism",
          "border-border border-2",
          "h-10 px-4 py-2",
          "hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
          "ring-offset-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none",
          "disabled:pointer-events-none disabled:opacity-50"
        )}
      >
        Prova
      </button>
    </main>
  );
}

/**
 * hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none
 */
