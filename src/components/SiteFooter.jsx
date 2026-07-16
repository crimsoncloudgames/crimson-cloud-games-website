import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07090d]/80 py-6">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-white/70 space-y-2">
        <Link to="/privacy-policy" className="block underline transition hover:text-white">
          Privacy Policy
        </Link>
        <p>&copy; 2026 Crimson Cloud Games. All rights reserved.</p>
      </div>
    </footer>
  );
}
