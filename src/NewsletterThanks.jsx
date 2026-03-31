import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setSeoMeta } from "./seo";

export default function NewsletterThanks() {
  useEffect(() => {
    setSeoMeta({
      title: "Thanks for Subscribing | Crimson Cloud Games",
      description:
        "Subscription confirmed for Crimson Cloud Games updates. Return to the homepage or review the privacy policy.",
      path: "/newsletter-thanks",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#07090d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/90 p-10 text-center shadow-[0_0_60px_rgba(0,0,0,0.35)]">
          <h1 className="text-4xl font-black tracking-tight">Thanks for subscribing!</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-white/70">
            You&apos;re now on the list for Crimson Cloud Games updates. We&apos;ll keep the news coming.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition hover:scale-[1.01]"
            >
              Back to the homepage
            </Link>
            <Link
              to="/privacy-policy"
              className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
