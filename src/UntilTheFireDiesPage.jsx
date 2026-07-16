import { useCallback, useEffect, useRef, useState } from "react";
import { setSeoMeta } from "./seo";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import utfdBackground from "./assets/utfd-background.png";
import utfdHeaderCapsule from "./assets/utfd-header-capsule.png";

const gameplaySteps = [
  {
    title: "Prepare by Day",
    text: "Explore the forest, chop trees, gather stone, carry logs, and split them into usable firewood.",
  },
  {
    title: "Build Your Camp",
    text: "Construct essential structures, organize your resources, and prepare the campfire before nightfall.",
  },
  {
    title: "Survive the Night",
    text: "Feed the fire, remain inside its protection, fight approaching enemies, and survive until dawn.",
  },
];

const features = [
  {
    title: "Physical Resource Gathering",
    body: "Chop trees, carry logs, split wood, and handle individual pieces of firewood.",
  },
  {
    title: "A Fire That Must Be Maintained",
    body: "Your campfire is your protection, but its fuel is limited.",
  },
  {
    title: "Day and Night Survival Loop",
    body: "Use the daylight wisely because the forest becomes far more dangerous after dark.",
  },
  {
    title: "Build and Prepare",
    body: "Construct the tools and structures needed to improve your chances of survival.",
  },
  {
    title: "First-Person Combat",
    body: "Use your axe to defend yourself when creatures reach the camp.",
  },
  {
    title: "Endless Survival",
    body: "See how many days and nights you can endure as the pressure increases.",
  },
];

const screenshots = [
  {
    src: "/images/until-the-fire-dies/until-the-fire-dies-screenshot-01.png",
    alt: "Until the Fire Dies gameplay screenshot 1",
  },
  {
    src: "/images/until-the-fire-dies/until-the-fire-dies-screenshot-02.png",
    alt: "Until the Fire Dies gameplay screenshot 2",
  },
  {
    src: "/images/until-the-fire-dies/until-the-fire-dies-screenshot-03.png",
    alt: "Until the Fire Dies gameplay screenshot 3",
  },
  {
    src: "/images/until-the-fire-dies/until-the-fire-dies-screenshot-04.png",
    alt: "Until the Fire Dies gameplay screenshot 4",
  },
  {
    src: "/images/until-the-fire-dies/until-the-fire-dies-screenshot-05.png",
    alt: "Until the Fire Dies gameplay screenshot 5",
  },
  {
    src: "/images/until-the-fire-dies/until-the-fire-dies-screenshot-06.png",
    alt: "Until the Fire Dies gameplay screenshot 6",
  },
];
const showScreenshots = screenshots.length > 0;

const developmentUpdates = [
  {
    title: "Development updates",
    body: "More development updates are coming soon.",
  },
];

const pressKitUrl = null;
const showDevelopmentUpdates = false;

export default function UntilTheFireDiesPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const triggerButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const overlayRef = useRef(null);
  const historyEntryRef = useRef(false);
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  const closeLightbox = useCallback((options = {}) => {
    const { restoreFocus = true, removeHistory = true } = options;
    setIsLightboxOpen(false);
    setActiveScreenshotIndex(0);
    document.body.style.overflow = "";

    if (restoreFocus && triggerButtonRef.current) {
      triggerButtonRef.current.focus();
    }

    if (removeHistory && historyEntryRef.current) {
      historyEntryRef.current = false;
      if (window.history.state?.utfdLightbox) {
        window.history.back();
      } else {
        const currentUrl = window.location.pathname + window.location.search + window.location.hash;
        window.history.replaceState(null, "", currentUrl);
      }
    }
  }, []);

  const updateLightboxHistory = useCallback((index) => {
    if (historyEntryRef.current) {
      const currentUrl = window.location.pathname + window.location.search + window.location.hash;
      window.history.replaceState({ utfdLightbox: true, index }, "", currentUrl);
    }
  }, []);

  const openLightbox = useCallback((index, buttonElement) => {
    triggerButtonRef.current = buttonElement;
    setActiveScreenshotIndex(index);
    setIsLightboxOpen(true);

    if (typeof window !== "undefined") {
      const currentUrl = window.location.pathname + window.location.search + window.location.hash;
      window.history.pushState({ utfdLightbox: true, index }, "", currentUrl);
      historyEntryRef.current = true;
    }
  }, []);

  const showPreviousScreenshot = useCallback(() => {
    setActiveScreenshotIndex((currentIndex) => {
      const nextIndex = currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1;
      updateLightboxHistory(nextIndex);
      return nextIndex;
    });
  }, [updateLightboxHistory]);

  const showNextScreenshot = useCallback(() => {
    setActiveScreenshotIndex((currentIndex) => {
      const nextIndex = currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1;
      updateLightboxHistory(nextIndex);
      return nextIndex;
    });
  }, [updateLightboxHistory]);

  useEffect(() => {
    setSeoMeta({
      title: "Until the Fire Dies | Crimson Cloud Games",
      description:
        "Gather resources by day, protect the fire by night, and survive the creatures lurking in the forest in Until the Fire Dies.",
      path: "/until-the-fire-dies/",
      imagePath: "/images/until-the-fire-dies/until-the-fire-dies-hero.svg",
      type: "website",
    });
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined;
    }

    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isLightboxOpen) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox({ restoreFocus: true, removeHistory: true });
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousScreenshot();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextScreenshot();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = overlayRef.current?.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );

        if (!focusableElements || focusableElements.length === 0) {
          event.preventDefault();
          overlayRef.current?.focus();
          return;
        }

        const elements = Array.from(focusableElements);
        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeLightbox, isLightboxOpen, showNextScreenshot, showPreviousScreenshot]);

  useEffect(() => {
    const handlePopState = () => {
      if (isLightboxOpen) {
        closeLightbox({ restoreFocus: true, removeHistory: false });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [closeLightbox, isLightboxOpen]);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        showNextScreenshot();
      } else {
        showPreviousScreenshot();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const activeScreenshot = screenshots[activeScreenshotIndex];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07090d] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-[10rem] h-[20rem] w-[20rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <SiteHeader />

      <main className="relative">
        <section className="border-b border-white/10">
          <div
            className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-20"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(7,9,13,0.92) 0%, rgba(7,9,13,0.78) 48%, rgba(7,9,13,0.35) 100%), url(${utfdBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-red-200">
                Until the Fire Dies
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                Until the Fire Dies
              </h1>
              <p className="mt-4 text-lg font-medium uppercase tracking-[0.24em] text-red-300/80">
                Gather by day. Defend the fire by night.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                A first-person survival horror game where every piece of firewood matters. Gather resources during the day, prepare your camp, and survive the creatures that emerge after dark.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://store.steampowered.com/app/4863690/Until_the_Fire_Dies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-red-950/50 transition hover:scale-[1.02]"
                >
                  WISHLIST ON STEAM
                </a>
                <a
                  href="https://store.steampowered.com/app/4864410/Until_the_Fire_Dies_Demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  VIEW DEMO ON STEAM
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-4 shadow-2xl shadow-black/35 backdrop-blur-sm">
              <img
                src={utfdHeaderCapsule}
                alt="Until the Fire Dies key art"
                className="w-full rounded-[1.5rem] border border-white/10 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 md:p-10">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                Trailer
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Watch the Trailer
              </h2>
              <div className="mx-auto mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-dashed border-white/15 bg-black/20 p-4 sm:p-6">
                <div className="flex h-full w-full items-center justify-center rounded-[1.25rem] border border-white/10 bg-black/20 text-center">
                  <div className="px-4">
                    <div className="text-2xl font-semibold text-white/90">Official Trailer Coming Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {showScreenshots ? (
          <section className="mx-auto max-w-7xl px-6 py-14">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 md:p-10">
              <div className="max-w-3xl">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                  Screenshots
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                  Screenshots
                </h2>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {screenshots.map((screenshot, index) => (
                  <div key={screenshot.src} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
                    <button
                      type="button"
                      aria-label={`Open ${screenshot.alt} in fullscreen`}
                      onClick={(event) => openLightbox(index, event.currentTarget)}
                      className="group block h-full w-full cursor-zoom-in text-left transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-red-400/60"
                    >
                      <div className="aspect-[4/3] bg-black/20 p-2">
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-6 py-4">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-red-600/10 via-white/[0.03] to-cyan-500/10 p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                About
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Keep the Fire Alive
              </h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-white/75">
                <p>
                  Daylight is your chance to prepare. Chop trees, carry logs, split them into firewood, gather stone, and build what you need before darkness arrives.
                </p>
                <p>
                  When night falls, the fire becomes your lifeline. Keep it burning, defend yourself from creatures in the forest, and survive until sunrise. Every piece of firewood burned tonight is one less piece available for the nights ahead.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                Gameplay Loop
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Three steps to survival
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {gameplaySteps.map((step, index) => (
                <article key={step.title} className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/25 bg-red-500/10 text-sm font-semibold text-red-200">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-4">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-red-600/10 via-white/[0.03] to-cyan-500/10 p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                Features
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Features
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-3">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-red-600/10 via-white/[0.03] to-cyan-500/10 p-7 md:p-10">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                Press & Creators
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Press & Creators
              </h2>
              <p className="mt-6 text-base leading-8 text-white/75">
                Looking to cover Until the Fire Dies? A downloadable press kit containing game information, screenshots, logos, key art, and other media resources is coming soon.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {pressKitUrl ? (
                <a
                  href={pressKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-red-950/50 transition hover:scale-[1.02]"
                >
                  OPEN PRESS KIT
                </a>
              ) : (
                <button type="button" disabled aria-disabled="true" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/70">
                  PRESS KIT COMING SOON
                </button>
              )}
            </div>

            <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/10 bg-black/20 p-6 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">Developer</div>
                <div className="mt-2 text-base font-semibold text-white">Crimson Cloud Games</div>
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">Genre</div>
                <div className="mt-2 text-base font-semibold text-white">First-Person Survival Horror</div>
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">Platform</div>
                <div className="mt-2 text-base font-semibold text-white">PC</div>
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">Store</div>
                <div className="mt-2 text-base font-semibold text-white">Steam</div>
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">Game Mode</div>
                <div className="mt-2 text-base font-semibold text-white">Endless Survival</div>
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">Demo</div>
                <div className="mt-2 text-base font-semibold text-white">Coming Soon on Steam</div>
              </div>
            </div>
          </div>
        </section>

        {showDevelopmentUpdates ? (
          <section className="mx-auto max-w-7xl px-6 py-14">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 md:p-10">
              <div className="max-w-3xl">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                  Development Updates
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                  Development Updates
                </h2>
              </div>

              <div className="mt-8 space-y-4">
                {developmentUpdates.map((update) => (
                  <article key={update.title} className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
                    <h3 className="text-xl font-semibold text-white">{update.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{update.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {isLightboxOpen && activeScreenshot ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot viewer"
            onClick={() => closeLightbox({ restoreFocus: false, removeHistory: true })}
          >
            <div
              ref={overlayRef}
              tabIndex={-1}
              className="relative flex h-full w-full max-w-6xl items-center justify-center"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close screenshot viewer"
                onClick={() => closeLightbox({ restoreFocus: true, removeHistory: true })}
                className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl font-semibold text-white shadow-lg transition hover:bg-black/80 sm:right-4 sm:top-4"
              >
                ×
              </button>

              <button
                type="button"
                aria-label="View previous screenshot"
                onClick={showPreviousScreenshot}
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl font-semibold text-white shadow-lg transition hover:bg-black/80 sm:left-4"
              >
                ‹
              </button>

              <button
                type="button"
                aria-label="View next screenshot"
                onClick={showNextScreenshot}
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl font-semibold text-white shadow-lg transition hover:bg-black/80 sm:right-4"
              >
                ›
              </button>

              <div className="flex h-full w-full items-center justify-center px-16 py-16 sm:px-20 sm:py-20">
                <div className="relative flex max-h-[calc(100vh-8rem)] max-w-full items-center justify-center rounded-[1.75rem] border border-white/10 bg-black/20 p-3 shadow-2xl shadow-black/50 sm:p-4">
                  <img
                    src={activeScreenshot.src}
                    alt={activeScreenshot.alt}
                    className="max-h-[calc(100vh-8rem)] max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-sm font-semibold text-white/90 shadow-lg">
                {activeScreenshotIndex + 1} / {screenshots.length}
              </div>
            </div>
          </div>
        ) : null}
      </main>

      <SiteFooter />
    </div>
  );
}
