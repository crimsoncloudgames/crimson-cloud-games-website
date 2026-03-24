import { useMemo, useState } from "react";

const logoSrc = "data:image/png;base64,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";

import ashesShot1 from "./assets/ashes-shot-1.png";
import ashesShot2 from "./assets/ashes-shot-2.png";
import ashesShot3 from "./assets/ashes-shot-3.png";
import ashesCardBg from "./assets/ashes-card-bg.webp";
import ashesShot4 from "./assets/ashes-shot-4.png";
import ashesShot5 from "./assets/ashes-shot-5.png";
import ashesShot6 from "./assets/ashes-shot-6.png";
import ashesShot7 from "./assets/ashes-shot-7.png";
import ashesShot8 from "./assets/ashes-shot-8.png";
import ashesShot9 from "./assets/ashes-shot-9.png";
function SteamStoreWidget({ appId, titleFallback, url }) {
  if (!appId) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="block rounded-[1.4rem] border border-white/10 bg-[#2d3643]/90 p-4 transition hover:border-white/20 hover:bg-[#364152]/95"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl bg-[#1b2230] text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Steam
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-lg font-semibold text-white">{titleFallback}</div>
            <p className="mt-2 text-sm leading-6 text-white/70">Open the Steam store page.</p>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#1b2838]">
      <iframe
        src={`https://store.steampowered.com/widget/${appId}/`}
        title={`${titleFallback} Steam widget`}
        width="100%"
        height="232"
        frameBorder="0"
        className="block w-full"
      />
    </div>
  );
}

export default function CrimsonCloudGamesWebsite() {
  const games = [
    {
      title: "Ashes of the Damned: The Forgotten Ward",
      year: "In development",
      genre: "Psychological horror",
      description:
        "A dark psychological horror experience set inside The Ashford Institute for the Mentally Afflicted, where every step pulls you deeper into dread.",
      trailerLabel: "Watch trailer",
      trailerUrl: "https://www.youtube.com/embed/bROWmDqrhiM",
      trailerExternalUrl: "https://www.youtube.com/watch?v=bROWmDqrhiM",
      primaryCta: "Wishlist on Steam",
      secondaryCta: "Press kit",
      storeUrl:
        "https://store.steampowered.com/app/3843760/Ashes_of_the_Damned_The_Forgotten_Ward/",
      appId: "3843760",
      storeBlurb:
        "Enter a decaying ward, face grotesque horrors, and fight to survive a psychological descent into dread.",
      screenshots: [
        { label: "Outside roof view", src: ashesShot1 },
        { label: "Examination room", src: ashesShot2 },
        { label: "Blood filled bathtub", src: ashesShot3 },
      ],
      backgroundImage: ashesCardBg,
      widgetTitle: "Wishlist on Steam",
    },
    {
      title: "I AM COFFEEE!",
      year: "Prototype / in development",
      genre: "Dark comedy office game",
      description:
        "Play as a sentient coffee machine in a chaotic office where every choice affects productivity, panic, and workplace chaos.",
      trailerLabel: "I AM COFFEEE! trailer",
      trailerUrl: null,
      trailerExternalUrl: null,
      news: "Latest news: Prototype testing is underway across multiple platforms to validate the concept and gather feedback.",
      primaryCta: "Wishlist on Steam",
      secondaryCta: "Press kit",
      storeUrl: "#",
      appId: null,
      storeBlurb:
        "A dark comedy office game where every cup you serve changes the workplace for better or worse.",
      screenshots: [
        { label: "Outside roof view", src: ashesShot1 },
        { label: "Examination room", src: ashesShot2 },
        { label: "Blood filled bathtub", src: ashesShot3 },
        { label: "Asylum exterior in rain", src: ashesShot4 },
        { label: "Blood stained examination table", src: ashesShot5 },
        { label: "Blood soaked gurney", src: ashesShot6 },
        { label: "Padded room", src: ashesShot7 },
        { label: "Auditorium", src: ashesShot8 },
        { label: "Attic storage room", src: ashesShot9 },
      ],
      backgroundImage: null,
      widgetTitle: "Steam widget",
    },
    {
      title: "Roll or Die",
      year: "Available now",
      genre: "Physics arcade challenge",
      description:
        "A fast restart, score chasing ball game built around momentum, collapsing floors, and pressure packed runs.",
      trailerLabel: "Roll or Die trailer",
      trailerUrl: null,
      trailerExternalUrl: null,
      news: "Latest update: Ongoing support and content updates continue as the game moves toward 1.0.",
      primaryCta: "View on Steam",
      secondaryCta: "Press kit",
      storeUrl: "#",
      appId: null,
      storeBlurb:
        "A focused arcade score chaser built around speed, control, and relentless pressure.",
      screenshots: [
        { label: "Screenshot 1", src: null },
        { label: "Screenshot 2", src: null },
        { label: "Screenshot 3", src: null },
      ],
      backgroundImage: null,
      widgetTitle: "Steam widget",
    },
    {
      title: "Factory Reset",
      year: "Earlier project",
      genre: "Game project",
      description:
        "An earlier Crimson Cloud Games project that helped shape the studio path and belongs in the lineup alongside the rest of the catalog.",
      trailerLabel: "Factory Reset trailer",
      trailerUrl: null,
      trailerExternalUrl: null,
      news: "Latest note: Add the correct description, trailer, and links here once you are ready to lock in the final details.",
      primaryCta: "Learn more",
      secondaryCta: "Press kit",
      storeUrl: "#",
      appId: null,
      storeBlurb: "An earlier project from the studio catalog.",
      screenshots: [
        { label: "Screenshot 1", src: null },
        { label: "Screenshot 2", src: null },
        { label: "Screenshot 3", src: null },
      ],
      backgroundImage: null,
      widgetTitle: "Store widget",
    },
  ];

  const [mediaModal, setMediaModal] = useState(null);

  const openTrailer = (game) => {
    setMediaModal({
      type: "trailer",
      title: game.title,
      currentIndex: 0,
      items: [
        {
          label: game.trailerLabel,
          url: game.trailerUrl,
          externalUrl: game.trailerExternalUrl,
        },
      ],
    });
  };

  const openScreenshots = (game, startIndex = 0) => {
    const validShots = game.screenshots.filter((shot) => shot.src);

    if (!validShots.length) return;

    const validIndex =
      game.screenshots.slice(0, startIndex + 1).filter((shot) => shot.src).length - 1;

    setMediaModal({
      type: "screenshots",
      title: game.title,
      currentIndex: Math.max(0, validIndex),
      items: validShots.map((shot, index) => ({
        ...shot,
        index,
      })),
    });
  };

  const closeModal = () => setMediaModal(null);

  const showPrev = () => {
    if (!mediaModal) return;
    setMediaModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.items.length) % prev.items.length,
    }));
  };

  const showNext = () => {
    if (!mediaModal) return;
    setMediaModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.items.length,
    }));
  };

  const currentModalItem = useMemo(() => {
    if (!mediaModal) return null;
    return mediaModal.items[mediaModal.currentIndex];
  }, [mediaModal]);

  return (
    <>
      <div className="min-h-screen bg-[#07090d] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute right-[-8rem] top-[10rem] h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-[-10rem] left-[20%] h-[24rem] w-[24rem] rounded-full bg-red-500/10 blur-3xl" />
        </div>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07090d]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-red-500/30 bg-white/5 shadow-lg shadow-red-950/40">
                <img
                  src={logoSrc}
                  alt="Crimson Cloud Games logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-[0.18em] text-white/90">
                  CRIMSON CLOUD GAMES
                </div>
                <div className="text-xs text-white/50">Original games across genres</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
              <a href="#games" className="transition hover:text-white">
                Games
              </a>
              <a href="#newsletter" className="transition hover:text-white">
                Newsletter
              </a>
              <a href="#socials" className="transition hover:text-white">
                Socials
              </a>
            </nav>
          </div>
        </header>

        <main className="relative">
          <section id="home" className="border-b border-white/10">
            <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28">
              <div>
                <div className="mb-5 inline-flex items-center rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-red-200">
                  • GAMES, UPDATES, AND LINKS •
                </div>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                  Original games.
                  <span className="block bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
                    Built to stand out.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                  Discover current and upcoming games, follow updates, 
                  and find the best places to play, wishlist, and stay connected.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#games"
                    className="rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-red-950/50 transition hover:scale-[1.02]"
                  >
                    View games
                  </a>
                  <a
                    href="#newsletter"
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Join the newsletter
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40">
                  <div className="text-xs uppercase tracking-[0.2em] text-red-300/80">
                    WHAT YOU'LL FIND HERE
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">Players</div>
                      <div className="mt-2 text-lg font-semibold">Playtests, wishlists, and updates</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">Projects</div>
                      <div className="mt-2 text-lg font-semibold">Current and upcoming games</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">Newsletter</div>
                      <div className="mt-2 text-lg font-semibold">Follow major updates</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-white/50">Socials</div>
                      <div className="mt-2 text-lg font-semibold">Every official link</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-500/10 to-white/5 p-6">
                  <div className="text-sm text-white/55">Stay connected</div>
                  <div className="mt-2 text-2xl font-semibold">Follow the studio and what comes next</div>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Get updates, find the latest projects, and keep up with new announcements from Crimson Cloud Games.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="games" className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-5xl">
              <div className="text-xl font-medium uppercase tracking-[0.18em] text-red-300/80">
                Games
              </div>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Released and upcoming games
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Explore released titles, current projects, and upcoming games from Crimson Cloud Games.
              </p>
            </div>

            <div className="mt-12 grid gap-8">
              {games.map((game, index) => (
                <article
                  key={game.title}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25"
                >
                  {game.backgroundImage && (
                    <>
                      <img
                        src={game.backgroundImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,6,10,0.52)_0%,rgba(4,6,10,0.30)_45%,rgba(4,6,10,0.22)_68%,rgba(4,6,10,0.34)_100%)]" />
                    </>
                  )}

                  <div className="relative z-10 grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative overflow-hidden p-8 md:p-10">
                      <div className="relative z-10 flex flex-wrap items-center gap-3 text-sm text-white/55">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          {game.year}
                        </span>
                        <span>{game.genre}</span>
                        <span>#{index + 1}</span>
                      </div>

                      <h3 className="relative z-10 mt-5 text-3xl font-black tracking-tight md:text-4xl">
                        {game.title}
                      </h3>

                      <p className="relative z-10 mt-4 max-w-2xl text-base leading-7 text-white/72">
                        {game.description}
                      </p>

                      <div className="relative z-10 mt-8 space-y-4">
                        <div className="rounded-3xl border border-white/10 bg-black/10 p-5 shadow-lg shadow-black/10 backdrop-blur-sm">
                          <div className="mb-3 flex items-center justify-between gap-4">
                            <div className="text-sm font-medium text-white/55">{game.widgetTitle}</div>
                            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
                              Steam
                            </div>
                          </div>

                          <SteamStoreWidget
                            appId={game.appId}
                            titleFallback={game.title}
                            url={game.storeUrl}
                          />
                        </div>

                      </div>

                      <div className="relative z-10 mt-6 flex flex-wrap gap-3">
                        <a
                          href={game.storeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                        >
                          {game.primaryCta}
                        </a>
                      </div>
                    </div>

                    <div className="border-l-0 border-white/10 bg-transparent p-8 md:p-10 lg:border-l">
                      <div className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                        Trailer
                      </div>

                      <iframe
                        src={game.trailerUrl}
                        title={`${game.title} trailer`}
                        className="aspect-video w-full overflow-hidden rounded-[1.75rem] border border-dashed border-white/15 bg-black/10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />

                      <div className="mt-6">
                        <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-white/55">
                          Screenshots
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {game.screenshots.map((shot, shotIndex) =>
                            shot.src ? (
                              <button
                                type="button"
                                key={`${game.title}-${shotIndex}`}
                                onClick={() => openScreenshots(game, shotIndex)}
                                className="group relative flex aspect-[4/3] overflow-hidden rounded-2xl border border-dashed border-white/15 bg-black/10 p-0 text-left text-xs text-white/40 transition hover:scale-[1.02] hover:border-red-400/50 hover:text-white/75"
                              >
                                <img
                                  src={shot.src}
                                  alt={shot.label}
                                  className="absolute inset-0 h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/20" />
                                <div className="relative z-10 mt-auto p-3 text-white/85">{shot.label}</div>
                              </button>
                            ) : (
                              <div
                                key={`${game.title}-${shotIndex}`}
                                className="relative flex aspect-[4/3] overflow-hidden rounded-2xl border border-dashed border-white/15 bg-black/10 p-0 text-left text-xs text-white/40"
                              >
                                <div className="mt-auto p-3">{shot.label}</div>
                              </div>
                            )
                          )}
                        </div>

                        <p className="mt-3 text-xs leading-5 text-white/40">
                          Click any screenshot to open it larger and move left or right through the gallery.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="newsletter" className="mx-auto max-w-7xl px-6 py-20">
            <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-600/10 via-white/[0.03] to-cyan-500/10 p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                    Newsletter
                  </div>
                  <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                    Build a direct audience you actually own
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                    This signup area gives you a direct way to push game announcements,
                    trailers, updates, playtests, and launches without relying on every social platform to do the job for you.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                    />
                    <button className="w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition hover:scale-[1.01]">
                      Join the list
                    </button>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-white/45">
                    For now this is a visual signup block. Later we can connect it to a real newsletter tool.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="socials" className="mx-auto max-w-7xl px-6 pb-20">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-red-300/80">
                Socials
              </div>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Follow Crimson Cloud Games
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                Keep up with new trailers, updates, demos, launches, and development posts.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Steam
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  itch.io
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Discord
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  X
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Bluesky
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/40">
          © 2026 Crimson Cloud Games. Built to centralize games, updates, and direct audience growth.
        </footer>
      </div>

      {mediaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-[#0b0f15] p-5 shadow-2xl shadow-black/60 md:p-8">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>

            <div className="mb-4 pr-14">
              <div className="text-xs uppercase tracking-[0.18em] text-red-300/80">
                {mediaModal.type === "trailer" ? "Trailer" : "Screenshot viewer"}
              </div>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">{mediaModal.title}</h3>
            </div>

            <div className="relative flex items-center gap-4">
              {mediaModal.items.length > 1 && (
                <button
                  type="button"
                  onClick={showPrev}
                  className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/80 transition hover:bg-white/10 hover:text-white md:flex"
                >
                  ‹
                </button>
              )}

              <div className="flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30">
                <div className="flex aspect-video items-center justify-center p-2 text-center md:p-6">
                  {mediaModal.type === "trailer" ? (
                    <div className="flex h-full w-full items-center justify-center">
                      <div>
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl text-white/85">
                          ▶
                        </div>
                        <div className="text-2xl font-semibold text-white/90">
                          {currentModalItem?.label}
                        </div>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 md:text-base">
                          Trailer preview is disabled here so the page does not keep asking for YouTube network access.
                        </p>
                        {currentModalItem?.externalUrl && (
                          <a
                            href={currentModalItem.externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                          >
                            Open trailer on YouTube
                          </a>
                        )}
                      </div>
                    </div>
                  ) : currentModalItem?.src ? (
                    <div className="h-full w-full">
                      <img
                        src={currentModalItem.src}
                        alt={currentModalItem.label}
                        className="h-full w-full rounded-[1.25rem] object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="mx-auto flex aspect-video max-w-5xl items-end rounded-[1.75rem] border border-dashed border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-left">
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                            {mediaModal.title}
                          </div>
                          <div className="mt-2 text-3xl font-bold text-white/90">
                            {currentModalItem?.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {mediaModal.items.length > 1 && (
                <button
                  type="button"
                  onClick={showNext}
                  className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/80 transition hover:bg-white/10 hover:text-white md:flex"
                >
                  ›
                </button>
              )}
            </div>

            {mediaModal.items.length > 1 && (
              <div className="mt-5 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={showPrev}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
                >
                  Left
                </button>
                <div className="text-sm text-white/45">
                  {mediaModal.currentIndex + 1} / {mediaModal.items.length}
                </div>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
                >
                  Right
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}