import { Me } from "@/config/me";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full border-t-8 border-black bg-[#ffc0cb] p-8">
      <div className="container mx-auto h-full">
        <p className="text-sm">
          &copy; {year} {Me.firstName} | Build with ❤ & ☕
        </p>
      </div>
    </footer>
  );
}
